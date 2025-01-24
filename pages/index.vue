<template>
  <div v-if="!groupStore.group.length">
    <NotFound />
  </div>
  <div v-else class="flex flex-col gap-6">
    <OverallCard />

    <div id="progress" class="flex flex-col gap-3">
      <h1>Projects {{ projectList.length }}</h1>
      <div class="flex overflow-x-auto items-center gap-6">
        <ProjectCard v-for="item, index in projectList" :key="index" :data="item" class="snap-start min-w-[65%]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NotFound from '~/components/common/notFound.vue';
import OverallCard from '~/components/common/overall.vue';
import ProjectCard from '~/components/common/Project/ProjectCard.vue';
import GroupCard from '~/components/common/Group/GroupCard.vue'
import { useGroupStore } from '~/store/group';
import { useDummyStore } from '~/store/dummy';
import { useProjectStore } from '~/store/project';

definePageMeta({
  middleware: "auth"
})
//state
const projectStore = useProjectStore()
const groupStore = useGroupStore()
const dummyStore = useDummyStore()
const maxProject = computed(() => dummyStore.dummy.projects.length || 0)
const projectList = computed(() => projectStore.projects || [])

const fetchProject = async () => {
  await projectStore?.fetchProject()
  console.log('On fetch project: ', projectList.value)
}

onMounted(() => {
  fetchProject()
})

// console.log("Dummy store: ", dummyStore.dummy)
</script>