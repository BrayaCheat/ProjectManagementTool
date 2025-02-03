<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline" class="text-sm px-4 py-2">New Project</Button>
    </SheetTrigger>

    <SheetContent side="top" class="border-none p-3 flex flex-col">
      <SheetTitle>
        <Header data="New Project" />
      </SheetTitle>
      <SheetDescription class="flex flex-col gap-3 text-[14px]">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <Input
              v-model.trim.lazy="projectForm.name"
              placeholder="Enter project name"
              required
              class="border-b text-lg font-medium focus:ring-0 placeholder:text-muted-foreground"
              :disabled="isLoading" />
            <component
              v-if="projectForm.name.length && !isLoading"
              :is="X"
              @click="onClearForm"
              class="absolute right-3 top-1/2 -translate-y-1/2 size-4 cursor-pointer text-muted-foreground hover:text-foreground"
            />
          </div>
          <p v-if="isError" class="text-destructive">{{ isError }}</p>
        </div>
      </SheetDescription>
      <Button
        @click="onSubmitForm"
        :disabled="isLoading"
        class="flex items-center justify-center gap-2 py-2 text-base font-medium">
        <span>Save Project</span>
        <component v-if="isLoading" :is="Loader2Icon" class="animate-spin size-4" />
      </Button>
      <SheetClose as-child>
        <Button variant="ghost" :disabled="isLoading" class="py-2 text-base">Cancel</Button>
      </SheetClose>
    </SheetContent>
  </Sheet>
</template>

<script setup>
import { Loader2Icon, X } from 'lucide-vue-next';
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetContent, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'vue-sonner';
import { useProjectStore } from '@/store/project';
import { useUserStore } from '@/store/user';
import Header from '@/components/common/Header.vue'

//state
const projectForm = reactive({ name: '', userId: null })
const isLoading = ref(false)
const isError = ref(false)
const projectStore = useProjectStore()
const userStore = useUserStore()

//computed
const userId = computed(() => userStore?.user?.id)

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
    projectForm.userId = userId.value
    isLoading.value = true;
    const { message } = await $fetch('/api/project', {
      method: 'POST',
      body: projectForm,
    })
    await projectStore.fetchProject()
    toast('', { description: message })
    projectForm.name = ''
    isLoading.value = false;
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
</script>