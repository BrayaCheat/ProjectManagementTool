<template>
  <div class="flex flex-col gap-6">
    <OverallCard />

    <div id="progress" class="flex flex-col gap-3">
      <h1>Projects {{ projectList.length }}</h1>
      <div class="flex overflow-x-auto items-center gap-6">
        <ProjectSkeleton v-if="projectStore.isLoading" class="flex-1" />
        <ProjectNotFound v-if="!projectList.length && !projectList.isLoading" class="flex-1" />
        <ProjectCard v-for="project in projectList" :key="project.id" :data="project"
          v-if="!projectStore.isLoading && projectList.length" class="snap-start min-w-[65%]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NotFound from '@/components/common/notFound.vue';
import OverallCard from '@/components/common/overall.vue';
import ProjectCard from '@/components/common/Project/ProjectCard.vue';
import { useGroupStore } from '@/store/group';
import { useProjectStore } from '@/store/project';
import ProjectSkeleton from '@/components/common/Project/ProjectSkeleton.vue';
import ProjectNotFound from '@/components/common/Project/ProjectNotFound.vue';

definePageMeta({
  middleware: "auth"
})
//state
const projectStore = useProjectStore()
const groupStore = useGroupStore()
const projectList = computed(() => projectStore.projects || [])

const fetchProject = async () => {
  await projectStore?.fetchProject()
  console.log('On fetch project: ', projectList.value)
}

onMounted(() => {
  fetchProject()
})

</script>