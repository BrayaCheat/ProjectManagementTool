<template>
  <div>
    <Card class="bg-primary flex items-center p-6">
      <div class="flex flex-col gap-6 flex-1">
        <div>
          <p class="text-muted text-left">
            Your today's task almost done!
          </p>
        </div>
        <Button variant="outline">
          View Task
        </Button>
      </div>
        <DonutChart index="name" :category="'total'" :data="data" :colors="['white', 'pink']" class="h-[140px] w-fit"/>
      <!-- <div class="flex flex-col items-start">
        <Button>
          <component :is="Ellipsis" class="size-6" />
        </Button>
      </div> -->
    </Card>
  </div>
</template>

<script setup>
import { Card } from '../ui/card';
import { Ellipsis } from 'lucide-vue-next';
import { DonutChart } from '@/components/ui/chart-donut'

//state
const data = [
  { name: 'Jan', total: 10, predicted: 10 },
]
</script>