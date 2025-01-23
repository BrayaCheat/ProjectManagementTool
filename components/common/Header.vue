<template>
  <div>
    <h1 class="my-3 font-bold">{{ title }}</h1>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: String,
      required: true,
    }
  })

  const title = computed(() => props.data.toString().toUpperCase() || '')
</script>