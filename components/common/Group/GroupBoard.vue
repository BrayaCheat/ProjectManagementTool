<template>
  <Card class="p-3 flex flex-col gap-3" :style="{ background: gradientBackground }">
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <Tag :color="groupColor" />
        <p>{{ groupName }}</p>
        <!-- <span class="text-muted-foreground">#{{ groupId }}</span> -->
      </div>
      <TaskForm :color="groupColor" />
    </div>
    <TaskCard v-if="haveTask" v-for="task in group.tasks" :key="task.id" :data="task" />
    <TaskNotFound v-else />
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import TaskCard from '@/components/common/Task/TaskCard.vue';
import Tag from '@/components/common/Tag.vue';
import TaskForm from '@/components/common/Task/TaskForm.vue';
import TaskNotFound from '@/components/common/Task/TaskNotFound.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

const group = computed(() => props?.data || [])
const groupName = computed(() => props?.data?.name || '')
const groupId = computed(() => props?.data?.id || '')
const groupColor = computed(() => props?.data?.color || '')

const withOpacity = (hexColor, opacity) => {
  const hex = hexColor.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const backgroundWithOpacity = computed(() => withOpacity(groupColor.value, 0.2));
const gradientBackground = computed(() => `linear-gradient(160deg, ${backgroundWithOpacity.value} 1%, rgba(255, 255, 255, 1) 50%)`);
const haveTask = computed(() => props?.data?.tasks?.length || [])
</script>
