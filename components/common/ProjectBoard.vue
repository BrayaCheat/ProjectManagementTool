<template>
  <Card class="border-none flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <p>{{projectName}}</p>
      <span class="text-muted-foreground">#{{ projectId }}</span>
    </div>
    <GroupBoard
      v-for="group in project.categories"
      :data="group"
    />
  </Card>
</template>

<script setup>
import Card from '../ui/card/Card.vue';
import GroupBoard from './GroupBoard.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

//computed
const projectName = computed(() => props.data[0]?.name)
const projectId = computed(() => props.data[0]?.id)
const project = computed(() => props.data[0] || [])
</script>