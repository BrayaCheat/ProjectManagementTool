<template>
  <NuxtLink :to="projectPath">
    <Card class="p-3 flex flex-col gap-3">
      <div class="flex items-center justify-between text-[14px]">
        <p class="text-muted-foreground">{{ projectName }}</p>
        <component :is="Radical" class="size-3 text-muted-foreground" />
      </div>
      <ul class="list-disc text-muted-foreground text-[14px]">
        <li v-for="item, index in projectGroup" :key="item.id" class="flex items-center gap-3">
          <Tag :color="item.color" />
          <span class="flex-1">{{ item.name }}</span>
        </li>
      </ul>
    </Card>
  </NuxtLink>

</template>

<script setup>
import { Card } from '../ui/card';
import { Inbox, ClipboardCheck, Clock, ChartSpline, Radical } from 'lucide-vue-next';
import Tag from './Tag.vue';

//state
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {},
  }
})

//computed
const projectName = computed(() => props.data?.name || '')
const projectGroup = computed(() => props.data?.categories || [])
const projectPath = computed(() => `/project/${props.data?.id}`)
</script>