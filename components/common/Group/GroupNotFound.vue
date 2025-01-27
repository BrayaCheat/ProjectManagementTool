<template>
  <div>
    <Card class="p-6 text-center max-w-md">
      <div class="flex flex-col items-center gap-4">
        <component :is="FolderPlus" class="size-8 text-muted-foreground" />
        <span class="text-sm text-muted-foreground">
          Please add a group to get started.
        </span>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { FolderPlus } from 'lucide-vue-next';
</script>