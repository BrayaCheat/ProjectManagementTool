<template>
  <div>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="sm">
          New Group
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="h-[75%]">
        <SheetTitle>
          <Header data="New Group" />
        </SheetTitle>
        <SheetDescription class="flex flex-col gap-3">
          {{ props.data }}
          <Label>Group name</Label>
          <div class="relative">
            <Input type="text" placeholder="Implment landing page" v-model.trim.lazy="groupForm.name" required="true"
              tabindex="-1" class="text-[16px]" />
            <component v-if="groupForm.name.length" @click="onClearForm" :is="X"
              class="absolute right-4 top-2.5 cursor-pointer size-5" />
          </div>

          <Label>Color</Label>
          <div class="relative">
            <Input type="color" required="true" tabindex="-1"
              class="text-[16px] absolute inset-0 w-full h-full cursor-pointer opacity-0" v-model="groupForm.color" />
            <div class="p-3 border rounded-md flex items-center gap-3">
              <div :style="{ background: groupForm.color }" class="p-1.5 rounded-full w-fit" />
              <span>Pick</span>
            </div>
          </div>

          <Button @click="onSubmitForm" :disabled="isLoading">
            <span>Save</span>
            <component v-if="isLoading" :is="Loader2Icon" class="animate-spin size-5" />
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup>
import { Loader2Icon, X } from 'lucide-vue-next';
import { Sheet, SheetTrigger, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet';
import Header from '@/components/common/Header.vue';

//state
const props = defineProps({
  data: {
    type: String,
    required: true
  }
})
const groupForm = reactive({
  name: '',
  color: '#24252a'
})
const isLoading = ref(false)


//function
const onClearForm = () => {
  groupForm.name = ''
}

const onSubmitForm = async () => {
  isLoading.value = true
  console.log('Form data: ', groupForm)
  // isLoading.value = false
}

//watch
watch(() => groupForm.color, (val) => {
  console.log("new color: ", val)
})
</script>