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
    </div>
    <!-- <div class="flex items-center text-muted-foreground text-[12px]">
      <ul class="list-disc">
        <span>Collaborator</span>
        <li v-for="user in taskCollaborator" :key="user.id" class="ml-3">
          {{ user.role }}
        </li>
      </ul>
    </div> -->
    <Badge :data="taskStatus" />
    <TaskDetail :data="task" />
  </Card>
</template>

<script setup>
import { Calendar } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';
import Badge from './Badge.vue';
import TaskDetail from './TaskDetail.vue';

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
const taskCollaborator = computed(() => props.data?.collaborators || [])
</script>
