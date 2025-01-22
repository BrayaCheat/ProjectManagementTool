<template>
  <nav class="px-3 py-6 flex items-center justify-between backdrop-blur-md">
      <div
        v-if="isVisible"
        class="flex items-center"
      >
        <Avatar class="size-9">
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <!-- <div class="flex flex-1 ms-6 flex-col">
          <span class="text-muted-foreground font-light text-[12px]">Hello</span>
          <span class="text-[12px]">{{ userName }}</span>
        </div> -->
        <span class="ms-3 text-muted-foreground">{{ userName }}</span>
      </div>
      <div
        v-else
        class="flex flex-1 items-center"
        >
        <Button @click="onGoBack">
          <component :is="ChevronLeft" class="size-5"/>
        </Button>
        <span class="flex-1 text-center">{{ routeName }}</span>
      </div>
      <Button @click="onSignOut">Sign out</Button>
    </nav>
</template>

<script setup>
import { useUserStore } from '~/store/user';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { ChevronLeft } from 'lucide-vue-next';
import { Button } from '../ui/button';
import {supabase} from '~/lib/supabase.js'

//state
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

//computed
// const userName = computed(() => userStore.user?.email.split('@')[0] || '')
const userName = computed(() => userStore.user?.email || '')
const isVisible = computed(() => route.path === '/' && true)
const routeName = computed(() => route.path.split('/')[1].toUpperCase() || '')

//function
const onGoBack = () => {
  router.go(-1)
}

const onSignOut = async () => {
  await supabase.auth.signOut()
  window.location.reload()
}
</script>