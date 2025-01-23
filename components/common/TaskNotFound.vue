<template>
  <div>
    <Card class="p-6 text-center max-w-md border-none bg-transparent shadow-none">
      <div class="flex flex-col items-center gap-4">
        <!-- Folder Plus Icon -->
        <component :is="FolderPlus" class="size-8 text-muted-foreground" />
        <!-- Main Message -->
        <span class="text-xl font-bold">
          It looks like there are no tasks yet.
        </span>
        <span class="text-sm text-muted-foreground">
          Please add a task to get started.
        </span>
      </div>
    </Card>
  </div>
</template>

<script setup>
  import { Card } from '../ui/card';
  import { FolderPlus } from 'lucide-vue-next';
</script>