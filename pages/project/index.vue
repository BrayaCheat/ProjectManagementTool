<template>
  <div id="Project" class="flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <ProjectSearch class="flex-1"/>
      <!-- <ProjectFilter /> -->
      <ProjectForm @on-success="onListenEmit"/>
    </div>
    <div class="flex flex-1 flex-col gap-3 overflow-y-scroll">
      <ProjectCard
        v-for="project in projects"
        :key="project"
        :data="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/common/Project/ProjectCard.vue';
import ProjectFilter from '@/components/common/Project/ProjectFilter.vue';
import ProjectForm from '@/components/common/Project/ProjectForm.vue';
import ProjectSearch from '@/components/common/Project/ProjectSearch.vue';
import { useProjectStore } from '@/store/project';

//state
const projectStore = useProjectStore()

//computed
const projects = computed(() => projectStore.projects || [])

//function
const onListenEmit = async () => await projectStore.fetchProject()
</script>
