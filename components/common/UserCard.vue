<template>
  <div>
    <Card class="flex flex-col gap-3 text-[14px] text-muted-foreground">
      <div class="flex items-center">
        <component :is="User"/>
        <span>{{ user }}. User {{ (user + 1) * 2 }}</span>
      </div>
      <span>Join date: {{ new Date().toLocaleDateString() }}</span>
    </Card>
  </div>
</template>

<script setup>
  import { User } from 'lucide-vue-next';
  import { Card } from '../ui/card';

  const props = defineProps({
    data: {
      type: Number,
      default: 0,
      required: true
    }
  })
  const user = computed(() => props.data || 0)
</script>