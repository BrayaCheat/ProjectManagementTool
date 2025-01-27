<template>
  <div>
    <div class="flex flex-col gap-3">
      <UserCard v-for="item, index in userData" :key="item.id" :data="item"/>
    </div>
  </div>
</template>

<script setup>
  import UserCard from '@/components/common/UserCard.vue';
  import { useDummyStore } from '@/store/dummy';

  const dummyStore = useDummyStore()

  const userData = computed(() => dummyStore.users || [])
</script>

<style lang="scss" scoped>

</style>