<template>
  <div class="sm:w-[430px] w-full mx-auto h-screen flex flex-col justify-center px-3">
    <NuxtPage/>
    <Toaster/>
  </div>
</template>

<script setup>
  import { Toaster } from 'vue-sonner';
</script>