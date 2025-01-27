export const useProjectStore = defineStore('projectStore', () => {
  const projects = ref([])

  const fetchProject = async () => {
    try {
      const {data} = await $fetch('/api/project')
      projects.value = data
    } catch (error) {
      console.log(error)
    }
  }

  const removeFromStore = (id) => {
    const index = projects.value.findIndex(project => project?.id === id)
    if(index !== -1){
      projects.value.splice(index, 1)
    }
  }

  return {
    //state
    projects,

    //function
    fetchProject,
    removeFromStore
  }
}, {
  persist: true
})