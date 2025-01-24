<template>
  <div class="border-none flex flex-col gap-3 h-full shadow-none">
    <div class="flex items-center">
      <Header :data="projectName" class="flex-1" />
      <GroupForm :data="projectId" />
    </div>
    <ProjectTab @onTabChange="onListenEmit" />
    <!-- <component :is="isActiveComponent"/> -->
    <Transition mode="out-in">
      <div v-if="isActiveComponent === 'group'">
        <GroupBoard v-if="projectGroup.length" v-for="group in projectGroup" :data="group" />
        <GroupNotFound v-else />
      </div>
      <div v-else-if="isActiveComponent === 'setting'">
        <ProjectSetting />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import GroupBoard from '../Group/GroupBoard.vue';
import GroupNotFound from '../Group/GroupNotFound.vue';
import GroupForm from '../Group/GroupForm.vue';
import Header from '../Header.vue';
import ProjectTab from './ProjectTab.vue';
import ProjectSetting from './ProjectSetting.vue'


//state
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})
const isActiveComponent = ref('group')

//computed
const projectName = computed(() => props.data?.name)
const projectId = computed(() => props.data?.id)
const project = computed(() => props.data || {})
const projectGroup = computed(() => props.data?.categories || [])

//function
const onListenEmit = (payload) => {
  console.log('Payload of emits: ', payload)
  isActiveComponent.value = payload
}
</script>