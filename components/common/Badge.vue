<template>
  <Card :class="`rounded-full px-4 w-fit text-[10px] py-0.5 ${statusColor(badge)}`">
    {{ badge }}
  </Card>
</template>

<script setup>
  import { Card } from '../ui/card';
  import { statusColor } from '~/utils/helper.js';
  const props = defineProps({
    data: {
      type: String,
      default: '',
      required: true
    }
  })
  const badge = computed(() => props.data?.toString()?.split('-')?.join(' ')?.toUpperCase() || '')
</script>
