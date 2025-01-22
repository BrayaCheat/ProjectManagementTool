<template>
  <div class="text-muted-foreground flex flex-col gap-3 items-center bg-secondary w-fit mx-auto p-9 rounded-3xl">
    <component :is="Inbox"/>
    <span>No tasks found.</span>
  </div>
</template>

<script setup>
  import { Inbox } from 'lucide-vue-next';
</script>