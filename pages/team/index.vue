<template>
  <div>
    <div class="flex flex-col gap-3">
      <UserCard v-for="item, index in 10" :key="index" :data="item"/>
    </div>
  </div>
</template>

<script setup>
  import UserCard from '~/components/common/UserCard.vue';
</script>

<style lang="scss" scoped>

</style>