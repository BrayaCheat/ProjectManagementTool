<template>
  <div>
    <div class="flex flex-col gap-3">
      <ProjectCard
        v-for="project in dummy"
        :key="project"
        :data="project" />
    </div>

  </div>
</template>

<script setup>
import ProjectCard from '~/components/common/ProjectCard.vue';
import { useDummyStore } from '~/store/dummy';

const dummyStore = useDummyStore()

const dummy = computed(() => dummyStore.dummy?.projects)
console.log("Dummy, ", dummy.value)
</script>
