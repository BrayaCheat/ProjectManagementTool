<template>
  <div>
    <Select>
      <SelectTrigger>
        <component :is="Filter" class="size-4 text-muted-foreground"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="Developer">Developer</SelectItem>
          <SelectItem value="UX / UI Designer">UX / UI Designer</SelectItem>
          <SelectItem value="Content Creator">Content Creator</SelectItem>
          <SelectItem value="QA Tester">QA Tester</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup>
import { Button } from '~/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Filter } from 'lucide-vue-next';
</script>
