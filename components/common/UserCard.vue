<template>
  <div>
    <Card class="flex flex-col gap-3 text-[14px] text-muted-foreground p-3">
      <div class="flex items-center gap-3">
        <Avatar/>
        <div class="flex flex-col">
          <span class="text-[12px] text-muted-foreground">{{ userRole }}</span>
          <span class="text-primary">{{ userName }}</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
  import { Card } from '../ui/card';
  import { Avatar } from '../ui/avatar';

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })
  const user = computed(() => props.data || {})
  const userName = computed(() => props.data?.name || '')
  const userRole = computed(() => props.data?.role || '')
</script>