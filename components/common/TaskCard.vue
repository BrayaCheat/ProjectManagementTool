<template>
  <Card class="p-3 flex flex-col gap-3 relative">
    <div class="flex items-center text-muted-foreground text-[14px] gap-3">
      <p>#{{ taskId }}</p>
      <p>{{ taskName }}</p>
    </div>
    <div class="flex items-center text-muted-foreground text-[12px]">
      <component :is="Calendar" class="size-3.5" />
      <span>{{ taskDate }}</span>
      <span class="mx-1">-</span>
      <span>{{ taskDueDate }}</span>
    </div>
    <div class="flex items-center text-muted-foreground text-[12px]">
      <ul>
        <li>Assign to: demo</li>
      </ul>
    </div>
    <Badge :data="taskStatus" />
    <TaskModal :data="task"/>
  </Card>
</template>

<script setup>
import { Calendar } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';
import Badge from './Badge.vue';
import TaskModal from './TaskModal.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

const task = computed(() => props.data || {})
const taskId = computed(() => props.data?.id || 'Unknown id')
const taskName = computed(() => props.data?.title || 'Unknown title')
const taskDate = computed(() => new Date(props.data?.createdAt).toLocaleDateString() || 'Unknown date')
const taskDueDate = computed(() => new Date(props.data?.dueDate).toLocaleDateString() || 'Unknown due date')
const taskStatus = computed(() => props.data?.status || 'Unknown status')
</script>
