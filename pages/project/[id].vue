<template>
  <div>
    <ProjectBoard
      :data="projectDetail"
    />
  </div>

</template>

<script setup>
import { useDummyStore } from '~/store/dummy';
import ProjectBoard from '~/components/common/ProjectBoard.vue';

//state
const dummyStore = useDummyStore()
const route = useRoute()
const { id } = route.params

//computed
const projectDetail = computed(() => dummyStore.dummy?.projects?.filter(project => project?.id === id) || [])
</script>