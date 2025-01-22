<template>
  <Card class="p-3 flex flex-col gap-3" :style="{background: gradientBackground}">
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <Tag :color="groupColor"/>
        <p>{{ groupName }}</p>
        <span class="text-muted-foreground">#{{ groupId }}</span>
      </div>
      <Button size="sm" class="text-[12px]" :style="{background: groupColor}">
        Add Task
      </Button>
    </div>
    <TaskCard
      v-for="task in group.tasks"
      :key="task.id"
      :data="task"
    />
  </Card>
</template>

<script setup>
import Card from '../ui/card/Card.vue';
import TaskCard from './TaskCard.vue';
import Tag from './Tag.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

const group = computed(() => props.data || [])
const groupName = computed(() => props.data?.name || 'Unknown Group')
const groupId = computed(() => props.data?.id || 'Unknown Id')
const groupColor = computed(() => props.data?.color || '#24252a')

const withOpacity = (hexColor, opacity) => {
  const hex = hexColor.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const backgroundWithOpacity = computed(() => withOpacity(groupColor.value, 0.2));
const gradientBackground = computed(() => `linear-gradient(310deg, ${backgroundWithOpacity.value} 1%, rgba(255, 255, 255, 1) 90%)`);
</script>

<style lang="scss" scoped></style>