<template>
  <div>
    <Sheet>
      <SheetTrigger>
        <component :is="Menu" class="size-6 text-muted-foreground" />
      </SheetTrigger>
      <SheetContent class="flex flex-col">
        <SheetTitle class="flex items-center gap-3">
          <Avatar class="size-9">
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{{ userName }}</span>
        </SheetTitle>
        <SheetDescription class="flex-1">
          demo
        </SheetDescription>
        <Button variant="destructive" @click="onSignOut">
          <span>Sign out</span>
          <component :is="isLoading ? LoaderCircle : LogOut" :class="`${isLoading ? 'animate-spin' : 'animate-none'}`"
            :disabled="isLoading" />
        </Button>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup>
import { LogOut, Menu, LoaderCircle } from 'lucide-vue-next';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUserStore } from '@/store/user';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

//state
const isLoading = ref(false)
const userStore = useUserStore()

//computed
const userName = computed(() => userStore.user?.email || 'JohnDoe@gmail.com')

//function
const onSignOut = async () => {
  isLoading.value = true
  await supabase.auth.signOut()
  window.location.reload()
  isLoading.value = false
}
</script>