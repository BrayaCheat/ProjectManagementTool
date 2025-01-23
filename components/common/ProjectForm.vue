<template>
  <div>
    <Sheet>
      <SheetTrigger as-child>
        <Button>
          <component :is="Plus"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="h-[50%]">
        <SheetTitle>
          <Header data="New Project"/>
        </SheetTitle>
        <SheetDescription class="flex flex-col gap-3">
          <Label>Project name</Label>
          <div class="relative">
            <Input
              placeholder="E-commerce platform"
              v-model.trim.lazy="projectForm.name"
              required="true"
              tabindex="-1"
              class="text-[16px]"
            />
            <component v-if="projectForm.name.length" :is="X" @click="onClearForm"
              class="cursor-pointer absolute right-4 top-2.5 size-5" />
          </div>
          <Button @click.prevent="onSubmitForm" :disabled="isLoading" class="flex items-center mt-6">
            <span>Save</span>
            <component v-if="isLoading" :is="Loader2Icon" class="animate-spin size-5" />
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup>
import { Loader2Icon, Plus, X } from 'lucide-vue-next';
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetContent } from '../ui/sheet';
import { Button } from '../ui/button';
import { Input } from '~/components/ui/input';
import { toast } from 'vue-sonner';
import Header from './Header.vue';

//state
const projectForm = reactive({ name: '' })
const isLoading = ref(false)

//function
const onClearForm = () => {
  projectForm.name = ''
}

const onSubmitForm = async () => {
  if (!projectForm.name) {
    return toast('Invalid Input', {
      description: 'Please enter a valid project name.'
    });
  }
  isLoading.value = true;
  toast('Success', {
    description: 'Your project has been saved successfully.'
  });
  console.log(projectForm.name);
  isLoading.value = false;
};


</script>