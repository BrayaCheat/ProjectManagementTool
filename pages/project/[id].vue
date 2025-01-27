<template>
  <ProjectBoard :data="projectDetail" />
</template>

<script setup>
import ProjectBoard from '@/components/common/Project/ProjectBoard.vue';
import { useProjectStore } from '@/store/project';

//state
const projectStore = useProjectStore()
const route = useRoute()
const { id } = route.params

//computed
const projectDetail = computed(() => projectStore.projects?.find(project => project?.id === id) || [])
</script>