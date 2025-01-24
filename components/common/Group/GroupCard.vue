<template>
  <Card class="p-3 flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <Tag :color="groupColor" />
      <p>{{ groupName }}</p>
    </div>
    <Progress class="h-2 rotate-180" :model-value="taskLeft" :max="totalTask" :style="{ background: groupColor }" />
    <!-- <div :class="`${taskLeft !== 0 ? 'text-primary' : 'text-green-500'} text-[14px]`">
      {{ taskDisplay }}
    </div> -->
  </Card>
</template>

<script setup>
import { Card } from '../../ui/card';
import Tag from '../Tag.vue';
import { Progress } from '../../ui/progress';

//state
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

//computed
const groupColor = computed(() => props.data?.color || '')
const groupName = computed(() => props.data?.name || '')
const totalTask = computed(() => props.data?.tasks.length || 1)
const taskLeft = computed(() => props.data?.tasks?.filter(item => item.status !== 'completed').length || 0)
const taskDisplay = computed(() => taskLeft === 0 ? '✅' : taskLeft)
</script>