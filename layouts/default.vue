<template>
  <ClientOnly>
    <div id="root" class="sm:w-[430px] w-full mx-auto h-screen flex flex-col justify-between">
      <NavBar />
      <main class="flex-1 overflow-y-auto overflow-x-hidden p-3">
        <NuxtPage />
        <Toaster />
      </main>
      <BottomBar />
    </div>
  </ClientOnly>

</template>

<script setup>
import { Toaster } from 'vue-sonner';
import NavBar from '@/components/common/NavBar.vue';
import BottomBar from '@/components/common/BottomBar.vue';
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
