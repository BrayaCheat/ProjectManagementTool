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

    return {
      //state
      group
    }
  },
  { persist: true }
);
