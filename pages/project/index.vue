<template>
  <div id="Project" class="flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <!-- <ProjectSearch class="flex-1"/> -->
      <!-- <ProjectFilter /> -->
      <ProjectForm v-if="projects.length" />
    </div>
    <div class="flex flex-1 flex-col gap-3 overflow-y-scroll">
      <!-- Skeleton loader while loading -->
      <ProjectSkeleton v-if="projectStore.isLoading" />
      <!-- If no projects are found -->
      <ProjectNotFound v-if="!projects.length && !projectStore.isLoading" />
      <!-- Render the projects -->
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :data="project"
        v-if="!projectStore.isLoading && projects.length"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/common/Project/ProjectCard.vue';
import ProjectFilter from '@/components/common/Project/ProjectFilter.vue';
import ProjectForm from '@/components/common/Project/ProjectForm.vue';
import ProjectSearch from '@/components/common/Project/ProjectSearch.vue';
import ProjectNotFound from '@/components/common/Project/ProjectNotFound.vue';
import ProjectSkeleton from '@/components/common/Project/ProjectSkeleton.vue';
import { useProjectStore } from '@/store/project';

//state
const projectStore = useProjectStore()

//computed
const projects = computed(() => projectStore.projects || [])
</script>
