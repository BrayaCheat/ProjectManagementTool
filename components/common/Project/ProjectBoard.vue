<template>
  <div class="border-none flex flex-col flex-1 gap-3 shadow-none h-full">
    <div class="flex items-center">
      <Label class="flex-1 text-[20px] font-bold">{{ projectName }}</Label>
      <GroupForm :data="projectId" />
    </div>
    <ProjectTab @onTabChange="onListenEmit" />

    <Transition mode="out-in" name="slide-fade" class="flex-1">
      <div v-if="isActiveComponent === 'group'" :key="'group'">
        <GroupBoard v-if="projectGroup.length" v-for="group in projectGroup" :data="group" />
        <GroupNotFound v-else />
      </div>
      <div v-else-if="isActiveComponent === 'setting'" :key="'setting'">
        <ProjectSetting :data="project"/>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import GroupBoard from '@/components/common/Group/GroupBoard.vue';
import GroupNotFound from '@/components/common/Group/GroupNotFound.vue';
import GroupForm from '@/components/common/Group/GroupForm.vue';
import ProjectTab from '@/components/common/Project/ProjectTab.vue';
import ProjectSetting from '@/components/common/Project/ProjectSetting.vue'
import { Label } from '@/components/ui/label';


//state
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})
const isActiveComponent = ref('group')

//computed
const projectName = computed(() => props.data?.name || '')
const projectId = computed(() => props.data?.id || '')
const project = computed(() => props.data || {})
const projectGroup = computed(() => props?.data?.categories || [])

//function
const onListenEmit = (payload) => {
  isActiveComponent.value = payload
}
</script>