<template>
  <footer class="pb-6 px-6 pt-3 flex items-center justify-between relative">
    <NuxtLink v-for="item in bottomBars" :key="item.label" :to="item.path"
      class="text-muted-foreground flex flex-col items-center" :class="[
        isActiveRoute(item.path) && 'text-primary',
        item.path === '/task' && 'bg-primary text-white rounded-full p-3'
      ]">
      <component :is="item.icon" class="size-5" />
      <span class="text-[12px]">{{ item.label }}</span>
      <div v-if="isActiveRoute(item.path)" class="absolute w-10 top-0 h-[2px] bg-primary duration-1000" />
    </NuxtLink>
  </footer>
</template>

<script setup>
import { FileText, Home, Settings, Users } from 'lucide-vue-next';

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
const isActiveRoute = (path) => route.path === path || false
</script>