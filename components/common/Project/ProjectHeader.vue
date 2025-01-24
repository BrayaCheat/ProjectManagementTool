<template>
  <div class="font-bold uppercase">
    {{ title }}
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: String,
      required: true,
      default: ''
    }
  })

  const title = computed(() => props.data || '')
</script>