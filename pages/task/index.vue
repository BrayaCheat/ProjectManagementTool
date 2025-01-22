<template>
  <div class="flex flex-col gap-6">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Choose a group"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Groups</SelectLabel>
          <SelectItem v-for="item in groupStore.group" :key="item.value" :value="item.value">
            {{ item.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup>
  import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '~/components/ui/select';
  import { useGroupStore } from '~/store/group';

  const groupStore = useGroupStore()
</script>

<style lang="scss" scoped>

</style>