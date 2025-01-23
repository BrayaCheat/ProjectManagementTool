<template>
  <div id="Project" class="flex flex-col gap-3 h-full">
    <div class="flex items-center gap-3">
      <ProjectSearch class="flex-1"/>
      <!-- <ProjectFilter /> -->
      <ProjectForm/>
    </div>
    <div class="flex flex-1 flex-col gap-3 overflow-y-scroll">
      <ProjectCard
        v-for="project in dummy"
        :key="project"
        :data="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '~/components/common/ProjectCard.vue';
import ProjectFilter from '~/components/common/ProjectFilter.vue';
import ProjectForm from '~/components/common/ProjectForm.vue';
import ProjectSearch from '~/components/common/ProjectSearch.vue';
import { useDummyStore } from '~/store/dummy';

const dummyStore = useDummyStore()

const dummy = computed(() => dummyStore.dummy?.projects)
</script>
