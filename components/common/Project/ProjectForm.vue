<template>
  <div>
    <Sheet :open="isSheetOpen">
      <SheetTrigger as-child>
        <Button @click="isSheetOpen = true" variant="outline" class="text-[12px]">
          New project
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="h-[75%] p-0 border-none" ref="sheet">
        <SheetTitle class="bg-primary text-secondary px-3 py-6 flex flex-col gap-3">
          <Label class="text-[20px]">Create new project</Label>
          <p class="text-muted-foreground text-[14px]/5">
            This project aims to enhance user experience and streamline business processes with an innovative solution.
          </p>
        </SheetTitle>
        <SheetDescription class="flex flex-col gap-3 py-6 px-3">
          <!-- <Label>Project name</Label> -->
          <div class="relative">
            <Input
              placeholder="E-commerce platform"
              v-model.trim.lazy="projectForm.name"
              required="true"
              tabindex="-1"
              class="text-[16px] rounded-none border-x-0 border-t-0 placeholder:text-secondary-muted focus-visible:*:z-0"
              :disabled="isLoading"
            />
            <component
              v-if="projectForm.name.length || !isLoading"
              :is="X"
              @click="onClearForm"
              class="cursor-pointer absolute right-4 top-2.5 size-5"
              :class="`${isLoading && 'hidden'}`"
            />
          </div>

          <div class="h-2">
            <span v-if="isError" class="text-destructive">{{ isError }}</span>
          </div>

          <div class="flex flex-col gap-3 mt-3">
            <Button
              @click.prevent="onSubmitForm"
              :disabled="isLoading || !projectForm.name"
              class="flex items-center px-6"
            >
              <span>Save</span>
              <component v-if="isLoading" :is="Loader2Icon" class="animate-spin size-5" />
            </Button>
            <Button
              variant="none"
              @click="isSheetOpen = false"
              :disabled="isLoading"
            >
              Cancel
            </Button>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup>
import { Loader2Icon, Plus, X } from 'lucide-vue-next';
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'vue-sonner';
import { Label } from '@/components/ui/label'
import { onClickOutside } from '@vueuse/core';
import { useProjectStore } from '@/store/project';

//state
const projectForm = reactive({ name: '' })
const isLoading = ref(false)
const isSheetOpen = ref(false)
const isError = ref(false)
const sheet = ref(null)
const projectStore = useProjectStore()

//function
const onClearForm = () => {
  projectForm.name = ''
}

const onSubmitForm = async () => {
  try {
    if (!projectForm.name || projectForm.name.trim() === '') {
      return toast('', { description: 'Please enter a valid project name.' });
    }
    if (projectForm.name.length < 6) {
      return toast('', { description: 'Project name must be 6 characters above' })
    }
    isLoading.value = true;
    const { message } = await $fetch('/api/project', {
      method: 'POST',
      body: projectForm,
    })
    await projectStore.fetchProject()
    toast('', { description: message })
    projectForm.name = ''
    isLoading.value = false;
    isSheetOpen.value = false;
  } catch (error) {
    isLoading.value = false
    console.error(error)
    toast('', { description: error })
  }
};

//watch
watch(() => projectForm.name, (val) => {
  if (!val.trim()) {
    isError.value = 'Project name is required.'
  }
  else if (val.length < 6) {
    isError.value = 'Project name must be at least 6 characters.'
  }
  else {
    isError.value = ''
  }
})

//vue use
onClickOutside(sheet, event => {
  event?.clientY > 204.75 ? isSheetOpen.value = true : isSheetOpen.value = false
})
</script>