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

  return {
    //state
    projects,

    //function
    fetchProject
  }
}, {
  persist: true
})