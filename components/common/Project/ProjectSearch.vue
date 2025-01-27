<template>
  <div class="relative">
    <Input
      placeholder="Search..."
      v-model.trim.lazy="searchQuery"
      tabindex="-1"
      class="text-[16px]"
      
    />
    <component :is="X" v-if="searchQuery.length"
      class="size-5 absolute right-4 top-2.5 text-muted-foreground cursor-pointer" @click="onClearSearchQuery" />
    <component :is="Search" v-else class="size-5 absolute right-4 top-2.5 text-muted-foreground cursor-pointer"
      @submit.prevent="onSubmitSearch" />
  </div>
</template>

<script setup>
import { Search, X } from 'lucide-vue-next';
import { toast } from 'vue-sonner';
import { Input } from '@/components/ui/input';

//state
const searchQuery = ref('')

//function
const onClearSearchQuery = () => searchQuery.value = ''
const onSubmitSearch = async () => {
  if (!searchQuery.value) {
    return toast('Invalid input field', {
      description: "make sure you include the right text"
    })
  }
  console.log('Submit search')
}
</script>