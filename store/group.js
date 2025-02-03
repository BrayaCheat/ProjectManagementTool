import { useUserStore } from "./user";

export const useGroupStore = defineStore(
  "groupStore",
  () => {
    const group = reactive([
      {
        label: "Office Project",
        value: "office",
        tasks: [
          { title: "Prepare Office Layout", status: "completed" },
          { title: "Order Office Supplies", status: "completed" },
          { title: "Set Up Internet", status: "pending" },
        ],
      },
      {
        label: "Website Development",
        value: "website",
        tasks: [
          { title: "Design Homepage", status: "completed" },
          { title: "Develop Backend", status: "in-progress" },
          { title: "Test Features", status: "pending" },
        ],
      },
      {
        label: "Marketing Campaign",
        value: "marketing",
        tasks: [
          { title: "Research Target Audience", status: "completed" },
          { title: "Create Campaign Graphics", status: "in-progress" },
          { title: "Launch Ads", status: "pending" },
        ],
      },
      {
        label: "App Development",
        value: "app",
        tasks: [
          { title: "Build User Interface", status: "in-progress" },
          { title: "Integrate API", status: "pending" },
          { title: "Test App", status: "pending" },
        ],
      },
      {
        label: "Event Planning",
        value: "event",
        tasks: [
          { title: "Book Venue", status: "completed" },
          { title: "Send Invitations", status: "in-progress" },
          { title: "Confirm Speakers", status: "pending" },
        ],
      },
    ]);

    const groups = ref([]);
    const userStore = useUserStore();
    const isLoading = ref(false);

    const fetchGroup = async () => {
      try {
        isLoading.value = true;
        const { data } = await $fetch(
          `/api/group?userId=${userStore?.user?.id}`
        );
        groups.value = data;
        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
        console.log(error);
      }
    };

    return {
      //state
      groups,

      //method
      fetchGroup
    };
  },
  { persist: true }
);
