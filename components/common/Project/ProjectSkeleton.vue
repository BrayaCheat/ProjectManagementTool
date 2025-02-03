<template>
  <Card class="flex items-center space-x-4 p-3">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </Card>
</template>

<script setup>
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
</script>