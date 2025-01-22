<template>
  <div v-if="!groupStore.group.length">
    <NotFound />
  </div>
  <div v-else class="flex flex-col gap-6">
    <OverallCard />

    <div id="progress" class="flex flex-col gap-3">
      <h1>Projects {{ maxProject }}</h1>
      <div class="flex overflow-x-auto items-center gap-6">
        <ProjectCard
          v-for="item, index in dummyStore.dummy.projects"
          :key="index"
          :data="item"
          class="snap-start min-w-[65%]"
        />
      </div>
    </div>

    <div id="task" class="flex flex-col gap-3">
      <!-- <h1>Groups {{ totalTasks }}</h1> -->
      <div class="flex flex-col gap-6">
        <div v-for="projects, index in dummyStore.dummy.projects" class="flex flex-col gap-3">
          <p>{{ projects.name }}</p>
          <GroupCard
            v-for="group, index in projects.categories"
            :key="index"
            :data="group"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NotFound from '~/components/common/notFound.vue';
import OverallCard from '~/components/common/overall.vue';
import ProjectCard from '~/components/common/ProjectCard.vue';
import GroupCard from '~/components/common/GroupCard.vue'
import { useGroupStore } from '~/store/group';
import { useDummyStore } from '~/store/dummy';

definePageMeta({
  middleware: "auth"
})
//state
const groupStore = useGroupStore()
const dummyStore = useDummyStore()
const maxProject = computed(() => dummyStore.dummy.projects.length || 0)
const totalTasks = computed(() =>
  groupStore.group?.reduce((acc, item) => acc + item.tasks.length, 0)
);

// console.log("Dummy store: ", dummyStore.dummy)
</script>