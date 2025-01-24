<script setup>
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../ui/popover'
import { Button } from '../../ui/button'
import { Calendar } from '../../ui/v-calendar'
import { cn } from '@/lib/utils'
import { format, differenceInDays } from 'date-fns'
import { Calendar as CalendarIcon, Clock } from 'lucide-vue-next'
import { ref } from 'vue'

//state
const date = ref()
const emits = defineEmits(['onEmitsDate'])

//computed
const daysLeft = computed(() => calculateDaysLeft(date.value));
const isShowDayLeft = computed(() => daysLeft.value > 0)

//function
const calculateDaysLeft = (selectedDate) => {
  if (!selectedDate) return null; // Handle cases where no date is selected
  const today = new Date();
  return differenceInDays(new Date(selectedDate), today); // Difference in days
};

const onEmitsDate = () => {
  emits('onEmitsDate', date.value)
}

//watch
watch(() => date, (val) => {
  console.log('date val: ', val.value)
  if (val.value) {
    onEmitsDate()
  }
}, { immediate: true, deep: true })
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button :variant="'outline'" :class="cn(
        'justify-start text-left font-normal flex-1',
        !date && 'text-muted-foreground',
      )">
        <CalendarIcon class="mr-2 h-4 w-4" />
        <span class="flex flex-1 items-center justify-between">{{ date ? format(date, "PPP") : "Pick a date" }}
          <span v-if="isShowDayLeft" class="ml-3 flex items-center gap-1">
            <component :is="Clock" class="size-5 text-muted-foreground" />
            {{ daysLeft }} days left
          </span>
        </span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" />
    </PopoverContent>
  </Popover>
</template>