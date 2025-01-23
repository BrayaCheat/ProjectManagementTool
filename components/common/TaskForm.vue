<template>
  <div>
    <Sheet>
      <SheetTrigger>
        <Button size="sm" :style="{ background: taskColor }">New Task</Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="h-[75%]">
        <SheetTitle>
          <Header data="New Task" />
        </SheetTitle>
        <SheetDescription>
          <form class="flex flex-col gap-3" @submit.prevent="onSubmitTask">
            <Label>Task name</Label>
            <div class="relative">
              <Input type="text" placeholder="Test with dummy data" v-model.trim.lazy="taskForm.title" required
                class="text-[16px]" tabindex="-1" />
              <component @click="onClearTitle" :is="X" v-if="taskForm.title.length"
                class="absolute right-4 top-2.5 size-5 cursor-pointer" />
            </div>

            <div class="flex items-center gap-3">
              <div class="flex flex-col gap-3 flex-1">
                <Label>Priority</Label>
                <Select v-model="taskForm.priority">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="item, index in priorityList" :key="index" :value="item">
                      {{ item }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-3 flex-1">
                <Label>Status</Label>
                <Select v-model="taskForm.status">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="item, index in statusList" :key="index" :value="item">
                      {{ item }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <Label>Due Date</Label>
              <TaskDateRange @onEmitsDate="onListenEmit" />
            </div>

            <div class="flex flex-col gap-3">
              <Label>Task Description</Label>
              <Textarea placeholder="Leave a note here..." v-model="taskForm.description" />
            </div>

            <Button type="submit">Save</Button>
          </form>
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
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from '../ui/select';
import { Label } from '../ui/label';
import Header from './Header.vue';
import { statusList, priorityList } from '~/utils/helper.js';
import { X } from 'lucide-vue-next';
import TaskDateRange from './TaskDateRange.vue';
import { Textarea } from '../ui/textarea';

//state
const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const taskForm = reactive({
  title: '',
  description: '',
  priority: '',
  dueDate: '',
  status: ''
})

//computed
const taskColor = computed(() => props.color || '#24252a')

//function
const onClearTitle = () => {
  taskForm.title = ''
}

const onSubmitTask = () => {
  console.log('Task data: ', taskForm)
}

const onListenEmit = (payload) => {
  console.log(payload)
  taskForm.dueDate = payload
}
</script>