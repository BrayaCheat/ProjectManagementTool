<template>
  <div>
    <div class="flex flex-col gap-3">
      <div v-for="category in dummy">
        <GroupCard v-for="item in category" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GroupCard from '@/components/common/Group/GroupCard.vue';
import { useDummyStore } from '@/store/dummy';

const dummyStore = useDummyStore()

const dummy = computed(() => dummyStore.dummy?.projects?.map(category => category?.categories))
console.log(dummy.value)
</script>