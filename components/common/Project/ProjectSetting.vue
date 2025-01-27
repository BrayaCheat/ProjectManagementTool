<template>
  <div class="flex flex-col gap-3 h-full">

    <div class="safe-zone flex flex-col gap-3">
      <h1>Rename Project</h1>
      <Card class="p-3 flex flex-col gap-3">
        <Input :placeholder="placeholder" v-model.trim.lazy="projectForm.name" />
        <Button size="sm" variant="outline" :disabled="!projectForm.name.length">
          Rename
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
            <DialogTitle>Are you sure you want to delete?</DialogTitle>
            <DialogDescription class="flex flex-col gap-3">
              <span>Type <span class="text-destructive">"{{ projectName }}"</span> to continue to the delete
                process.</span>
              <Input placeholder="" type="text" v-model.trim.lazy="confirmDelete" class="text-[16px]" tabindex="-1" />
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
import Separator from '@/components/ui/separator/Separator.vue';
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
const placeholder = computed(() => props?.data?.name || '')
const projectId = computed(() => props?.data?.id || '')
const projectName = computed(() => props?.data?.name)
const isDeleteDisable = computed(() => confirmDelete.value !== projectName.value)

//function
const onDeleteProject = async () => {
  try {
    isLoading.value = true
    const { data } = await $fetch(`/api/project/${projectId.value}`, {
      method: 'DELETE'
    })
    projectStore.removeFromStore(projectId.value)
    toast(data, { description: data })
    router.push('/project')
    isLoading.value = false
  } catch (error) {
    console.error(error)
    toast('', { description: error })
  }
}
</script>