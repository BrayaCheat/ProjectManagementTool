<template>
  <nav class="px-3 py-6 flex items-center justify-between backdrop-blur-md">
    <div v-if="isVisible" class="flex items-center">
      <ProjectHeader data="ToDo.com"/>
    </div>
    <div v-else class="flex flex-1 items-center">
      <component @click="onGoBack" :is="ChevronLeft" class="size-6 cursor-pointer text-muted-foreground" />
      <Breadcrumb class="flex-1 flex items-center justify-center">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" class="uppercase">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem v-for="item, index in routeName" :key="index">
            <BreadcrumbLink :href="`/${item}`" class="uppercase">
              {{ item }}
            </BreadcrumbLink>
            <BreadcrumbSeparator v-if="index !== routeName.length - 1 || index === 0" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <NavBarSheet/>
  </nav>
</template>

<script setup>
import NavBarSheet from './NavBarSheet.vue'
import { ChevronLeft } from 'lucide-vue-next';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb';
import ProjectHeader from './ProjectHeader.vue';

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