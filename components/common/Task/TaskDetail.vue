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
            <span>-</span>
            <span>{{ modalDueDate }}</span>

            <div class="flex items-center gap-1 ml-6 text-destructive">
              <component :is="Clock" class="size-4" />
              <span>{{ daysLeft }}</span>
            </div>
          </div>
          <p>Priority: <span :class="priorityColor(modalPriority)">{{ priority(modalPriority) }}</span></p>
          <ul class="list-disc">
            <span>Collaborator</span>
            <li v-for="user in modalCollaborators" :key="user.id" class="ml-3">
              {{ user.role }}
            </li>
          </ul>
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
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '../../ui/dialog';
import { priorityColor, priority } from '~/utils/helper.js';
import Badge from '../Badge.vue';
import { Separator } from '../../ui/separator';
import { Textarea } from '../../ui/textarea';
import { Clock } from 'lucide-vue-next';

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
  return daysLeft > 0 ? `${daysLeft} days left` : 0; // Ensure daysLeft is not negative
});
const modalComments = computed(() => props.data?.comments || [])
const modalCollaborators = computed(() => props.data?.collaborators || [])

defineExpose({
  daysLeft
})
</script>