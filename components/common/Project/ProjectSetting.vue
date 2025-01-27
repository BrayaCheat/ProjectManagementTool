<template>
  <div class="flex flex-col gap-3 h-full">

    <div class="safe-zone flex flex-col gap-3">
      <h1>Rename Project</h1>
      <Card class="p-3 flex flex-col gap-3">
        <Input
          :placeholder="projectName"
          v-model.trim.lazy="projectForm.name"
          :disabled="isLoading" required
          type="text"
          class="text-[16px]"
          tabindex="-1"
        />
        <Button size="sm" variant="outline" :disabled="isLoading || !projectForm.name.length" @click="onRenameProject">
          <span>Rename</span>
          <component v-if="isLoading" :is="Loader2Icon" class="animate-spin" />
        </Button>
      </Card>
    </div>


    <div class="danger-zone flex flex-col gap-3">
      <h1>Danger Zone</h1>
      <Card class="border-destructive p-3 flex flex-col gap-3">
        <div class="flex flex-col">
          <h1 class="text-[14px]">Delete this project</h1>
          <span class="text-muted-foreground text-[12px]">
            Once you delete a project, there is no going back.
          </span>
          <span class="text-muted-foreground text-[12px]">
            Please be certain.
          </span>
        </div>

        <Dialog>
          <DialogTrigger as-child>
            <Button variant="destructive" size="sm" type="button">
              Delete project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription class="flex flex-col gap-3">
              <span>Are you sure you want to delete <strong class="text-destructive">"{{ projectName }}"</strong>?</span>
              <span>Type <strong class="text-destructive">"{{ projectName }}"</strong> to confirm.</span>
              <Input
                :placeholder="projectName"
                type="text"
                v-model.trim.lazy="confirmDelete"
                class="text-[16px]"
                tabindex="-1"
                required
                :disabled="isLoading"
              />
            </DialogDescription>
            <Button @click="onDeleteProject" variant="destructive" :disabled="isDeleteDisable || isLoading">
              <span>Confirm</span>
              <component v-if="isLoading" :is="Loader2Icon" class="animate-spin" />
            </Button>
          </DialogContent>
        </Dialog>
      </Card>
    </div>


  </div>
</template>

<script setup>
import { toast } from 'vue-sonner';
import Card from '@/components/ui/card/Card.vue';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2Icon } from 'lucide-vue-next';
import { useProjectStore } from '@/store/project';

//state
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const projectForm = reactive({ name: "" })
const confirmDelete = ref('')
const isLoading = ref(false)
const router = useRouter()
const projectStore = useProjectStore()

//computed
const projectId = computed(() => props?.data?.id || '')
const projectName = computed(() => props?.data?.name || '')
const isDeleteDisable = computed(() => confirmDelete.value !== projectName.value)

//function
const onDeleteProject = async () => {
  try {
    isLoading.value = true
    const { data } = await $fetch(`/api/project/${projectId.value}`, {
      method: 'DELETE'
    })
    projectStore.removeFromStore(projectId.value)
    toast('', { description: data })
    isLoading.value = false
    router.push('/project')
  } catch (error) {
    isLoading.value = false
    console.error(error)
    toast('', { description: error })
  }
}

const onRenameProject = async () => {
  try {
    isLoading.value = true
    const { message } = await $fetch(`/api/project/${projectId.value}`, {
      method: 'PUT',
      body: projectForm
    })
    await projectStore.fetchProject()
    toast('', { description: message })
    projectForm.name = ''
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    console.error(error)
    toast('', { description: error })
  }
}
</script>