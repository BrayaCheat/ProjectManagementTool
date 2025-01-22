<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
  {
    modelValue: 0,
    max: 100, // Set default max to 100 if not provided
  },
)

const modelValue = computed(() => props.modelValue || 0)

const progressPercentage = computed(() => {
  // Calculate the percentage based on modelValue and max
  return (modelValue.value / props.max) * 100
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ProgressRoot v-bind="delegatedProps" :class="cn(
    'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
    props.class,
  )
    ">
    <ProgressIndicator class="h-full bg-secondary transition-all" :style="`width: ${progressPercentage}%;`" />
  </ProgressRoot>
</template>
