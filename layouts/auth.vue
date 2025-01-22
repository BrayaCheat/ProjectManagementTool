<template>
  <div class="sm:w-[430px] w-full mx-auto h-screen flex flex-col justify-center px-3">
    <NuxtPage />
    <Toaster />
  </div>
</template>

<script setup>
import { Toaster } from 'vue-sonner';
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>