<template>
  <Card class="rounded-full px-4 w-fit text-[10px] py-0.5">
    {{ badge }}
  </Card>
</template>

<script setup>
  import { Card } from '../ui/card';
  const props = defineProps({
    data: {
      type: String,
      default: '',
      required: true
    }
  })
  const badge = computed(() => props.data?.toString()?.split('-')?.join(' ')?.toUpperCase() || '')
</script>
