<template>
  <Card class="border-none flex flex-col gap-3 h-full">
    <div class="flex items-center justify-between">
      <ProjectHeader :data="projectName" />
      <GroupForm/>
    </div>
    <GroupBoard v-if="project.categories.length"  v-for="group in project.categories" :data="group"/>
    <GroupNotFound v-else/>
  </Card>
</template>

<script setup>
import Card from '../ui/card/Card.vue';
import GroupBoard from './GroupBoard.vue';
import ProjectHeader from './ProjectHeader.vue';
import GroupNotFound from './GroupNotFound.vue';
import GroupForm from './GroupForm.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

//computed
const projectName = computed(() => props.data?.name)
const projectId = computed(() => props.data?.id)
const project = computed(() => props.data || {})

console.log("project: ", project.value)
</script>