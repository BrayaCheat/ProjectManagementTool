<template>
  <div>
    <Card class="p-6 text-center max-w-md">
      <div class="flex flex-col items-center gap-4">
        <!-- Folder Plus Icon -->
        <component :is="FolderPlus" class="size-8 text-muted-foreground" />
        <!-- Main Message -->
        <span class="text-xl font-bold">
          It looks like there are no groups yet.
        </span>
        <span class="text-sm text-muted-foreground">
          Please add a group to get started.
        </span>
        <!-- Group Form -->
        <GroupForm />
      </div>
    </Card>
  </div>
</template>

<script setup>
  import { Card } from '../ui/card';
  import GroupForm from './GroupForm.vue';
  import { FolderPlus } from 'lucide-vue-next';
</script>