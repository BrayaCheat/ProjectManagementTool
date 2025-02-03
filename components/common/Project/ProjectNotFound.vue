<template>
  <Card class="p-4 flex flex-col items-center gap-2 text-center">
    <FileX class="size-6 text-muted-foreground" />
    <p class="text-sm text-muted-foreground">No projects found.</p>
    <ProjectForm/>
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { FileX } from 'lucide-vue-next';
import ProjectForm from '@/components/common/Project/ProjectForm.vue';
</script>