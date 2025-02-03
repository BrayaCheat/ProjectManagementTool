import { useUserStore } from "@/store/user";

export const useProjectStore = defineStore(
  "projectStore",
  () => {
    const projects = ref([]);
    const userStore = useUserStore();
    const isLoading = ref(false)

    const fetchProject = async () => {
      try {
        isLoading.value = true
        const { data } = await $fetch(
          `/api/project?userId=${userStore?.user?.id}`
        );
        projects.value = data;
        isLoading.value = false
      } catch (error) {
        isLoading.value = false
        console.log(error);
      }
    };

    const removeProject = (id) => {
      const index = projects.value.findIndex((project) => project?.id === id);
      if (index !== -1) {
        projects.value.splice(index, 1);
      }
    };

    const ClearProjectStore = () => {
      if (projects.value.length) {
        projects.value = [];
      }
    };

    return {
      //state
      projects,
      isLoading,

      //function
      fetchProject,
      removeProject,
      ClearProjectStore
    };
  },
  {
    persist: true,
  }
);
