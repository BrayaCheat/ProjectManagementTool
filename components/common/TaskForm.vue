<template>
  <div>
    <Sheet>
      <SheetTrigger>
        <Button size="sm" :style="{ background: taskColor }">New Task</Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="h-[50%]">
        <SheetTitle>
          <Header data="New Task" />
        </SheetTitle>
        <SheetDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, reiciendis.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup>
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription
} from '~/components/ui/sheet'
import Header from './Header.vue';

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const taskColor = computed(() => props.color || '#24252a')
</script>