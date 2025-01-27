<template>
  <ClientOnly>
    <div id="root" class="sm:w-[430px] w-full mx-auto h-screen flex flex-col justify-between">
      <NavBar />

      <main class="flex-1 overflow-y-auto overflow-x-hidden p-3">
        <NuxtPage />
        <Toaster />
      </main>

      <footer class="p-6 flex items-center justify-between relative">
        <NuxtLink v-for="item in bottomBars" :key="item.label" :to="item.path"
          class="text-muted-foreground flex flex-col items-center" :class="[
            isActiveRoute(item.path) && 'text-primary',
            item.path === '/task' && 'bg-primary text-white rounded-full p-3'
          ]">
          <component :is="item.icon" class="size-6" />
          <span class="text-[12px]">{{ item.label }}</span>
          <div v-if="isActiveRoute(item.path)" class="absolute w-10 top-3 h-[2px] bg-primary duration-1000" />
        </NuxtLink>
      </footer>
    </div>
  </ClientOnly>

</template>

<script setup>
import { Toaster } from 'vue-sonner';
import { FileStack, FileText, Group, Home, Plus, Settings, User, Users } from 'lucide-vue-next';
import NavBar from '@/components/common/NavBar.vue';

//state
const bottomBars = reactive([
  {
    label: 'Home',
    icon: Home,
    path: '/',
  },
  {
    label: 'Project',
    icon: FileText,
    path: '/project',
  },
  // {
  //   label: '',
  //   icon: Plus,
  //   path: '/task'
  // },
  {
    label: 'Team',
    icon: Users,
    path: '/team',
  },
  {
    label: 'Setting',
    icon: Settings,
    path: '/setting',
  }
])
const route = useRoute()

//computed
// const userName = computed(() => userStore.user?.email.split('@')[0] || '')
const isActiveRoute = (path) => route.path === path || false
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
