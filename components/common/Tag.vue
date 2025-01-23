<template>
  <div :style="{background: color}" class="p-1.5 rounded-full"/>
</template>

<script setup>
//state
  const props = defineProps({
    color: {
      type: String,
      required: true,
      default: '#fff',
      // Valid color format (hex, rgb, hsl)
      validator: (value) => /^#[0-9A-F]{6}$/i.test(value) || /^(rgb|hsl)/i.test(value)
    }
  })
//computed
const color = computed(() => props.color || '#fff')
</script>