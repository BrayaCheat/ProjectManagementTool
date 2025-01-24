<template>
  <div class="border-b flex items-center gap-6">
    <Button
      v-for="item, index in tabs"
      class="text-muted-foreground pl-0 gap-1 relative"
      :class="`${isActive === item.label && 'text-primary'}`"
      variant="none"
      @click="item.action"
    >
        <component :is="item.icon" />
        <span>{{ item.label }}</span>
        <div v-if="isActive === item.label" class="h-[2px] bg-primary absolute bottom-0 inset-x-0 w-full"/>
    </Button>
  </div>
</template>

<script setup>
import { Button } from '../../ui/button';
import { Users, Settings, Group } from 'lucide-vue-next';
//state
const emits = defineEmits(['onTabChange'])
const isActive = ref('Group')
const tabs = reactive([
  {
    id: 1,
    label: 'Group',
    icon: Group,
    action: () => {
      emits('onTabChange', 'group')
      isActive.value = 'Group'
    }
  },
  {
    id: 2,
    label: 'Setting',
    icon: Settings,
    action: () => {
      emits('onTabChange', 'setting')
      isActive.value = 'Setting'
    }
  }
])
</script>