<template>
  <Card :class="`rounded-full pe-4 ps-3 w-fit text-[10px] py-0.5 ${statusColor(badge)} flex items-center gap-1`" tabindex="-1">
    <component :is="statusIcon(badge)" class="size-3.5"/>
    {{ badge }}
  </Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';
  import { statusColor, statusIcon } from '@/utils/helper.js';
  const props = defineProps({
    data: {
      type: String,
      default: '',
      required: true
    }
  })
  const badge = computed(() => props.data?.toString()?.split('-')?.join(' ')?.toUpperCase() || '')
</script>
