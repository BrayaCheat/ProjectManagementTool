<template>
  <div>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="sm">
          New Group
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="flex flex-col gap-3">
        <SheetTitle>
          <Header data="New Group" />
        </SheetTitle>
        <SheetDescription class="flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <Label>Group name</Label>
            <div class="relative">
              <Input type="text" placeholder="Implment landing page" v-model.trim.lazy="groupForm.name" required="true"
                tabindex="-1" class="text-[14px]" />
              <component v-if="groupForm.name.length" @click="onClearForm" :is="X"
                class="absolute right-4 top-2.5 cursor-pointer size-5" />
            </div>
          </div>


          <div class="flex flex-col gap-3">
            <!-- color picked -->
            <div class="flex items-center gap-2">
              <Label>Color: </Label>
              <div :style="{ background: groupForm.color }" class="p-1.5 rounded-full w-fit duration-300" />
            </div>
            <!-- color picker -->
            <div class="flex items-center gap-3 flex-nowrap overflow-x-auto">
              <div v-for="item, index in colorHolders" :key="index"
                class="flex items-center border rounded-xl p-1.5 gap-2"
                :style="groupForm.color === item && { border: `1px solid ${item}` }" @click="onColorChange(index)">
                <div :style="{ background: item }" class="rounded-full w-fit p-1.5" />
              </div>
            </div>
          </div>
        </SheetDescription>

        <!-- save button -->
        <Button @click="onSubmitForm" :disabled="isLoading">
          <span>Save</span>
          <component v-if="isLoading" :is="Loader2Icon" class="animate-spin size-5" />
        </Button>

        <!-- cancel button -->
        <SheetClose as-child>
          <Button variant="outline" class="w-full">
            Cancel
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup>
import { Loader2Icon, X } from 'lucide-vue-next';
import { Sheet, SheetTrigger, SheetContent, SheetDescription, SheetTitle, SheetClose } from '@/components/ui/sheet';
import Header from '@/components/common/Header.vue';
import { toast } from 'vue-sonner';
import { useUserStore } from '@/store/user';
import { useProjectStore } from '@/store/project';

//state
const props = defineProps({
  data: {
    type: String,
    required: true
  }
})
const groupForm = reactive({
  name: '',
  color: '#24252a',
  userId: '',
  projectId: ''
})
const projectStore = useProjectStore()
const userStore = useUserStore()
const colorHolders = ref(['#ff0000', '#0000ff', '#ffc0cb', '#ffa500', '#008000']);
const isLoading = ref(false)

//computed
const userId = computed(() => userStore?.user?.id || '')
const projectId = computed(() => props?.data || '')

//function
const onColorChange = (index) => {
  groupForm.color = colorHolders.value[index]
}

const onClearForm = () => {
  groupForm.name = ''
}

const onSubmitForm = async () => {
  try {
    isLoading.value = true
    groupForm.userId = userId.value
    groupForm.projectId = projectId.value
    const { message } = await $fetch(`/api/group`, {
      method: 'POST',
      body: groupForm
    })
    await projectStore.fetchProject()
    toast('', { description: 'success' })
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    toast('', { description: error })
  }
}
</script>