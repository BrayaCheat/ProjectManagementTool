<template>
  <div class="absolute inset-0">
    <Dialog>
      <DialogTrigger as-child>
        <Button class="w-full h-full hover:bg-transparent" variant="ghost"></Button>
      </DialogTrigger>
      <DialogContent>

        <!-- task section -->
        <DialogTitle>
          <div class="flex items-center justify-between">
            <span>{{ modalName }}</span>
            <Badge :data="modalStatus" />
          </div>
        </DialogTitle>
        <DialogDescription class="flex flex-col gap-3">
          <p>{{ modalDescription }}</p>
          <div class="flex items-center gap-1">
            <p>Deadline:</p>
            <span>{{ modalDate }}</span>
            <span class="mx-1">-</span>
            <span>{{ modalDueDate }}</span>
            <span>{{ daysLeft }}</span>
          </div>
          <p>Priority: <span :class="mapPriorityColor(modalPriority)">{{ priority(modalPriority) }}</span></p>
          <p>Assign to: demo</p>
        </DialogDescription>

        <Separator />

        <!-- comment section -->
        <DialogTitle>
          <span>Comment</span>
        </DialogTitle>
        <DialogDescription class="flex flex-col gap-3">
          <div class="flex items-start gap-1" v-for="item in modalComments" :key="item.id">
            <Avatar></Avatar>
            <Textarea disabled :placeholder="item.content" />
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { Calendar } from 'lucide-vue-next';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '~/components/ui/dialog';
import { priority } from '~/utils/helper.js';
import Badge from './Badge.vue';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {}
  }
})

//computed
const modal = computed(() => props.data)
const modalName = computed(() => props.data.title || 'Unknown title')
const modalDate = computed(() => new Date(props.data.createdAt).toLocaleDateString() || 'None')
const modalDueDate = computed(() => new Date(props.data.dueDate).toLocaleDateString() || '')
const modalDescription = computed(() => props.data?.description || '')
const modalPriority = computed(() => props.data?.priority || 0)
const modalStatus = computed(() => props.data?.status || '')
const daysLeft = computed(() => {
  const currentDate = new Date();
  const dueDate = new Date(props.data.dueDate);
  const timeDifference = dueDate - currentDate;
  const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
  return daysLeft > 0 ? `(${daysLeft} days left)` : 0; // Ensure daysLeft is not negative
});
const modalComments = computed(() => props.data?.comments || [])

console.log(modalComments.value)


//function
const mapPriorityColor = (val) => {
  switch (val) {
    case 1:
      return 'text-red-500'
    case 2:
      return 'text-yellow-500'
    case 3:
      return 'text-green-500'
    default:
      return 'text-inherit'
  }
}

console.log(props.data)
</script>

<style lang="scss" scoped></style>