<template>
  <nav class="px-3 pt-6 pb-3 flex items-center justify-between backdrop-blur-md">
    <Header data="ToDo.com" v-if="isVisible"/>
    <div v-else class="flex flex-1 items-center">
      <component @click="onGoBack" :is="ChevronLeft" class="size-6 cursor-pointer text-muted-foreground" />
      <Breadcrumb class="flex-1 flex items-center justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink class="uppercase truncate w-[200px]">
              {{ $route.path }}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <NavBarSheet />
  </nav>
</template>

<script setup>
import NavBarSheet from '@/components/common/NavBarSheet.vue'
import { ChevronLeft } from 'lucide-vue-next';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink } from '@/components/ui/breadcrumb';
import Header from '@/components/common/Header.vue';

//state
const route = useRoute()
const router = useRouter()

//computed
const isVisible = computed(() => route.path === '/' && true)
const routeName = computed(() => route.path.split('/'))

//function
const onGoBack = () => {
  router.go(-1)
}
</script>