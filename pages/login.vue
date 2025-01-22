<template>
  <div id="Login-Form" class="flex flex-col gap-3">
    <form @submit.prevent="onLogin" class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <Label>Email</Label>
        <Input placeholder="JohnDoe@gmail.com" v-model.trim.lazy="userForm.email" type="email" required />
      </div>
      <div class="flex flex-col relative gap-3">
        <Label>Password</Label>
        <Input :placeholder="isVisiblePassword ? '12345678' : '********'" v-model.trim.lazy="userForm.password"
          :type="isVisiblePassword ? 'text' : 'password'" required />
        <Button variant="ghost" class="w-fit absolute right-0 top-7 text-muted-foreground" type="button"
          @click="onTogglePasswordVisibility">
          <component :is="isVisiblePassword ? Eye : EyeClosed" />
        </Button>
      </div>

      <!-- submit button -->
      <Button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Loading' : 'Sign in' }}
        <component :is="isLoading ? Loader2 : ChevronRight" :class="isLoading ? 'animate-spin' : 'animate-none'" />
      </Button>
    </form>

    <Separator label="Or continue with" class="my-4" />

    <Button v-for="item, index in OAuthOptions" :key="item.label" variant="outline" @click="item.action"
      :disabled="isLoading" type="button" class="flex items-center justify-center">
      <NuxtImg :src="item.icon" :alt="item.label" class="size-6" />
      <span class="w-[150px] text-left text-zinc-500">Continue with {{ item.label }}</span>
    </Button>
  </div>
</template>

<script setup>
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { ChevronRight, Eye, EyeClosed, Loader2, Ban } from 'lucide-vue-next';
import { Separator } from '~/components/ui/separator';
import { supabase } from '~/lib/supabase';
import { toast } from 'vue-sonner'
import { useUserStore } from '~/store/user';

//meta
definePageMeta({
  layout: 'auth'
})

useHead({
  title: 'Login',
  meta: [
    { name: 'description', content: 'Login to your account' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'robots', content: 'noindex, nofollow' }, // Optional, depending on your use case
  ],
})

//state
const OAuthOptions = reactive([
  {
    label: 'Google',
    icon: 'https://api.iconify.design/logos:google-icon.svg',
    action: () => onOAuthLogin('google')
  },
  {
    label: 'Facebook',
    icon: 'https://api.iconify.design/logos:facebook.svg',
    action: () => onOAuthLogin('facebook')
  }
])
const userForm = reactive({
  email: '',
  password: ''
})
const isVisiblePassword = ref(false)
const isLoading = ref(false)
const userStore = useUserStore()

//function
const onTogglePasswordVisibility = () => {
  isVisiblePassword.value = !isVisiblePassword.value
}

const onLogin = async () => {
  try {
    isLoading.value = true
    const { data: { user }, error } = await supabase.auth.signInWithPassword(userForm)
    if (error) {
      console.log(error)
      toast('An error occur', {
        description: error?.message,
        icon: Ban
      })
      isLoading.value = false
    }
    if (user) {
      userStore.user = user
      isLoading.value = false
      return navigateTo('/')
    }
  } catch (error) {
    toast('An error occur', {
      description: error
    })
    isLoading.value = false
  }
}

const onOAuthLogin = async (provider) => {
  try {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: 'https://qopqqgejueclmtiahnoe.supabase.co/auth/v1/callback'
      }
    })
    console.log("Oauth data: ", data)
    console.log("Provider: ", provider)
  } catch (error) {
    toast('An error occur', {
      description: error
    })
    isLoading.value = false
  }
}

// watch(() => userStore.user, (val) => {
//   if (val) {
//     return navigateTo('/')
//   }
// }, { immediate: true, deep: true })
</script>

<style lang="scss" scoped></style>