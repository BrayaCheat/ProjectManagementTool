<template>
  <Card class="p-3 flex flex-col gap-3 relative" tabindex="-1">
    <div class="flex items-center text-muted-foreground text-[14px] gap-3">
      <p>{{ taskName }}</p>
      <p>#{{ taskId }}</p>
    </div>
    <div class="flex items-center text-muted-foreground text-[12px]">
      <component :is="Calendar" class="size-3.5" />
      <span>{{ taskDate }}</span>
      <span class="mx-1">-</span>
      <span>{{ taskDueDate }}</span>
      <div class="flex items-center gap-1 ml-6 text-destructive">
        <component :is="Clock" class="size-4" />
        <span>{{ daysLeft }}</span>
      </div>
    </div>
    <Badge :data="taskStatus" />
    <TaskDetail :data="task" ref="taskDetail" />
  </Card>
</template>

<script setup>
import { Calendar, Clock } from 'lucide-vue-next';
import { Card } from '../../ui/card';
import Badge from '../Badge.vue';
import TaskDetail from './TaskDetail.vue';

//state
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})
//listen to expose from child
const taskDetail = ref(null)

//computed
const daysLeft = computed(() => taskDetail.value?.daysLeft || '')
const task = computed(() => props.data || {})
const taskId = computed(() => props.data?.id || 'Unknown id')
const taskName = computed(() => props.data?.title || 'Unknown title')
const taskDate = computed(() => new Date(props.data?.createdAt).toLocaleDateString() || 'Unknown date')
const taskDueDate = computed(() => new Date(props.data?.dueDate).toLocaleDateString() || 'Unknown due date')
const taskStatus = computed(() => props.data?.status || 'Unknown status')
</script>
