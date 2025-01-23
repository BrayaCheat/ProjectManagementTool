export const useDummyStore = defineStore(
  "dummyStore",
  () => {
    const dummy = ref({
      projects: [
        {
          id: "projectTest",
          name: "projectTest",
          categories: [
            {
              id: "categorytest",
              name: "categorytest",
              color: "#24252a",
              tasks: [],
            },
          ],
        },
        {
          id: "project1",
          name: "Website Redesign",
          categories: [
            {
              id: "category1",
              name: "UI Design",
              color: "#FF5733",
              tasks: [
                {
                  id: "task1",
                  userId: "user1",
                  title: "Create Wireframes",
                  description: "Design the initial wireframes for the homepage",
                  priority: 1,
                  dueDate: "2025-01-25T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-20T10:00:00Z",
                  updatedAt: "2025-01-21T10:00:00Z",
                  comments: [
                    {
                      id: "comment1",
                      userId: "user2",
                      content:
                        "The wireframes are looking great! Can we make the buttons a bit bigger?",
                      createdAt: "2025-01-21T12:00:00Z",
                    },
                    {
                      id: "comment2",
                      userId: "user3",
                      content:
                        "I suggest changing the color scheme slightly to match the brand.",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task1",
                      userId: "user1",
                      role: "UX/UI Designer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task2",
                  userId: "user2",
                  title: "Design Logo",
                  description: "Design a new logo for the brand",
                  priority: 2,
                  dueDate: "2025-01-28T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-20T11:00:00Z",
                  updatedAt: "2025-01-21T11:00:00Z",
                  comments: [
                    {
                      id: "comment3",
                      userId: "user1",
                      content:
                        "I like the direction you're going with, but maybe explore a simpler design.",
                      createdAt: "2025-01-21T15:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task2",
                      userId: "user2",
                      role: "UX/UI Designer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "category2",
              name: "Development",
              color: "#33C1FF",
              tasks: [
                {
                  id: "task3",
                  userId: "user3",
                  title: "Set Up Backend",
                  description:
                    "Initialize the project backend with API endpoints",
                  priority: 2,
                  dueDate: "2025-01-30T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-20T12:00:00Z",
                  updatedAt: "2025-01-21T12:00:00Z",
                  comments: [
                    {
                      id: "comment4",
                      userId: "user1",
                      content:
                        "Ensure the backend is scalable for future updates.",
                      createdAt: "2025-01-21T16:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task3",
                      userId: "user3",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task4",
                  userId: "user2",
                  title: "Implement Authentication",
                  description: "Set up user authentication using JWT",
                  priority: 1,
                  dueDate: "2025-02-05T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-22T10:00:00Z",
                  updatedAt: "2025-01-23T11:00:00Z",
                  comments: [
                    {
                      id: "comment5",
                      userId: "user3",
                      content:
                        "Don't forget to add multi-factor authentication later.",
                      createdAt: "2025-01-23T14:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task4",
                      userId: "user2",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "project2",
          name: "Marketing Campaign",
          categories: [
            {
              id: "category3",
              name: "Social Media",
              color: "#FFC300",
              tasks: [
                {
                  id: "task5",
                  userId: "user1",
                  title: "Schedule Social Posts",
                  description:
                    "Plan and schedule social media posts for next week",
                  priority: 3,
                  dueDate: "2025-01-27T00:00:00Z",
                  status: "completed",
                  createdAt: "2025-01-20T13:00:00Z",
                  updatedAt: "2025-01-21T13:00:00Z",
                  comments: [
                    {
                      id: "comment6",
                      userId: "user2",
                      content:
                        "The schedule looks perfect! I like the variety of content types.",
                      createdAt: "2025-01-21T17:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task5",
                      userId: "user1",
                      role: "Content Creator",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task6",
                  userId: "user3",
                  title: "Create Social Media Graphics",
                  description: "Create graphics for social media posts",
                  priority: 1,
                  dueDate: "2025-01-26T00:00:00Z",
                  status: "completed",
                  createdAt: "2025-01-20T14:00:00Z",
                  updatedAt: "2025-01-21T14:00:00Z",
                  comments: [
                    {
                      id: "comment7",
                      userId: "user1",
                      content:
                        "Can you make the text more readable? The font might be too small.",
                      createdAt: "2025-01-21T18:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task6",
                      userId: "user3",
                      role: "Content Creator",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "category4",
              name: "Email Campaign",
              color: "#FF6F61",
              tasks: [
                {
                  id: "task7",
                  userId: "user2",
                  title: "Write Email Copy",
                  description: "Write compelling copy for email marketing",
                  priority: 2,
                  dueDate: "2025-01-29T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-22T11:00:00Z",
                  updatedAt: "2025-01-23T12:00:00Z",
                  comments: [
                    {
                      id: "comment8",
                      userId: "user1",
                      content:
                        "Make sure the tone is aligned with our brand voice.",
                      createdAt: "2025-01-23T13:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task7",
                      userId: "user2",
                      role: "IT Support",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task8",
                  userId: "user3",
                  title: "Design Email Template",
                  description: "Design an HTML template for the email",
                  priority: 1,
                  dueDate: "2025-02-02T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-22T14:00:00Z",
                  updatedAt: "2025-01-23T15:00:00Z",
                  comments: [
                    {
                      id: "comment9",
                      userId: "user1",
                      content: "Let's use a more vibrant color scheme.",
                      createdAt: "2025-01-23T16:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task8",
                      userId: "user3",
                      role: "IT Support",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "project3",
          name: "Mobile App Development",
          categories: [
            {
              id: "category5",
              name: "App Design",
              color: "#8E44AD",
              tasks: [
                {
                  id: "task9",
                  userId: "user1",
                  title: "Create App Wireframes",
                  description:
                    "Design the initial wireframes for the mobile app",
                  priority: 1,
                  dueDate: "2025-02-10T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-23T09:00:00Z",
                  updatedAt: "2025-01-24T10:00:00Z",
                  comments: [
                    {
                      id: "comment10",
                      userId: "user2",
                      content:
                        "This looks fantastic! Let's make sure the navigation is user-friendly.",
                      createdAt: "2025-01-24T12:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task9",
                      userId: "user1",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task10",
                  userId: "user3",
                  title: "Design App Icon",
                  description: "Create an app icon for the mobile app",
                  priority: 2,
                  dueDate: "2025-02-05T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-23T10:00:00Z",
                  updatedAt: "2025-01-24T11:00:00Z",
                  comments: [
                    {
                      id: "comment11",
                      userId: "user1",
                      content:
                        "Consider a minimalist approach for the app icon.",
                      createdAt: "2025-01-24T13:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task10",
                      userId: "user3",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "category6",
              name: "App Development",
              color: "#3498DB",
              tasks: [
                {
                  id: "task11",
                  userId: "user2",
                  title: "Set Up App Backend",
                  description: "Set up the backend for mobile app API",
                  priority: 1,
                  dueDate: "2025-02-12T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-23T11:00:00Z",
                  updatedAt: "2025-01-24T12:00:00Z",
                  comments: [
                    {
                      id: "comment12",
                      userId: "user1",
                      content:
                        "Ensure to integrate Firebase for notifications.",
                      createdAt: "2025-01-24T14:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task11",
                      userId: "user2",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task12",
                  userId: "user3",
                  title: "Implement Push Notifications",
                  description: "Implement push notifications for the app",
                  priority: 2,
                  dueDate: "2025-02-15T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-23T12:00:00Z",
                  updatedAt: "2025-01-24T13:00:00Z",
                  comments: [
                    {
                      id: "comment13",
                      userId: "user1",
                      content:
                        "Don't forget to test notifications on different devices.",
                      createdAt: "2025-01-24T15:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task12",
                      userId: "user3",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "project4",
          name: "E-commerce Platform",
          categories: [
            {
              id: "category7",
              name: "Frontend Development",
              color: "#1E90FF",
              tasks: [
                {
                  id: "task13",
                  userId: "user4",
                  title: "Develop Homepage",
                  description: "Create a responsive homepage with Tailwind CSS",
                  priority: 1,
                  dueDate: "2025-02-01T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-15T09:00:00Z",
                  updatedAt: "2025-01-18T10:00:00Z",
                  comments: [
                    {
                      id: "comment14",
                      userId: "user5",
                      content:
                        "Ensure the hero section is visually appealing on mobile.",
                      createdAt: "2025-01-16T11:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task13",
                      userId: "user4",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task14",
                  userId: "user5",
                  title: "Optimize Web Performance",
                  description:
                    "Improve page load time and reduce HTTP requests",
                  priority: 2,
                  dueDate: "2025-02-05T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-16T12:00:00Z",
                  updatedAt: "2025-01-17T13:00:00Z",
                  comments: [
                    {
                      id: "comment15",
                      userId: "user4",
                      content: "Use lazy loading for images.",
                      createdAt: "2025-01-16T14:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task14",
                      userId: "user5",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "category8",
              name: "Backend Development",
              color: "#228B22",
              tasks: [
                {
                  id: "task15",
                  userId: "user6",
                  title: "Database Design",
                  description: "Design schema for user and product management",
                  priority: 1,
                  dueDate: "2025-01-30T00:00:00Z",
                  status: "completed",
                  createdAt: "2025-01-14T15:00:00Z",
                  updatedAt: "2025-01-16T16:00:00Z",
                  comments: [
                    {
                      id: "comment16",
                      userId: "user5",
                      content:
                        "Don't forget to include indexing for faster queries.",
                      createdAt: "2025-01-14T17:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task15",
                      userId: "user6",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task16",
                  userId: "user7",
                  title: "Integrate Payment Gateway",
                  description: "Add Stripe for secure payments",
                  priority: 2,
                  dueDate: "2025-02-07T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-17T09:00:00Z",
                  updatedAt: "2025-01-20T11:00:00Z",
                  comments: [
                    {
                      id: "comment17",
                      userId: "user6",
                      content: "Add sandbox testing before going live.",
                      createdAt: "2025-01-19T12:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task16",
                      userId: "user7",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "project5",
          name: "Event Management App",
          categories: [
            {
              id: "category9",
              name: "Feature Development",
              color: "#FFA07A",
              tasks: [
                {
                  id: "task17",
                  userId: "user8",
                  title: "Add RSVP Feature",
                  description: "Allow users to RSVP for events",
                  priority: 1,
                  dueDate: "2025-02-10T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-20T09:00:00Z",
                  updatedAt: "2025-01-22T10:00:00Z",
                  comments: [
                    {
                      id: "comment18",
                      userId: "user9",
                      content:
                        "Include email notifications for event reminders.",
                      createdAt: "2025-01-21T11:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task17",
                      userId: "user8",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task18",
                  userId: "user9",
                  title: "Implement Push Notifications",
                  description: "Send push notifications for new events",
                  priority: 2,
                  dueDate: "2025-02-15T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-22T12:00:00Z",
                  updatedAt: "2025-01-23T13:00:00Z",
                  comments: [
                    {
                      id: "comment19",
                      userId: "user8",
                      content: "Test notifications on both Android and iOS.",
                      createdAt: "2025-01-22T14:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task18",
                      userId: "user9",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
            {
              id: "category10",
              name: "Quality Assurance",
              color: "#32CD32",
              tasks: [
                {
                  id: "task19",
                  userId: "user10",
                  title: "Bug Testing",
                  description: "Conduct end-to-end testing for all features",
                  priority: 1,
                  dueDate: "2025-02-12T00:00:00Z",
                  status: "in-progress",
                  createdAt: "2025-01-23T09:00:00Z",
                  updatedAt: "2025-01-24T10:00:00Z",
                  comments: [
                    {
                      id: "comment20",
                      userId: "user9",
                      content: "Use automated tools for performance testing.",
                      createdAt: "2025-01-23T11:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task19",
                      userId: "user10",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
                {
                  id: "task20",
                  userId: "user8",
                  title: "Cross-Browser Testing",
                  description: "Ensure compatibility across browsers",
                  priority: 2,
                  dueDate: "2025-02-20T00:00:00Z",
                  status: "pending",
                  createdAt: "2025-01-25T09:00:00Z",
                  updatedAt: "2025-01-26T10:00:00Z",
                  comments: [
                    {
                      id: "comment21",
                      userId: "user10",
                      content:
                        "Check browser compatibility for Edge and Safari.",
                      createdAt: "2025-01-25T11:00:00Z",
                    },
                  ],
                  collaborators: [
                    {
                      taskId: "task20",
                      userId: "user8",
                      role: "Developer",
                      createdAt: "2025-01-21T14:00:00Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    const users = ref([
      {
        id: 1,
        userId: "",
        name: "Alice Smith",
        role: "Software Engineer",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 2,
        userId: "",
        name: "Bob Johnson",
        role: "Marketing Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 3,
        userId: "",
        name: "Charlie Williams",
        role: "Sales Director",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 4,
        userId: "",
        name: "David Brown",
        role: "Customer Success Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 5,
        userId: "",
        name: "Emily Jones",
        role: "Product Designer",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 6,
        userId: "",
        name: "Finn Miller",
        role: "Software Developer",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 7,
        userId: "",
        name: "Grace Garcia",
        role: "Content Marketing Specialist",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 8,
        userId: "",
        name: "Henry Moore",
        role: "Business Development Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 9,
        userId: "",
        name: "Isabella Hernandez",
        role: "UX/UI Designer",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 10,
        userId: "",
        name: "Jack Wilson",
        role: "Data Analyst",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 11,
        userId: "",
        name: "Karen Davis",
        role: "Project Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 12,
        userId: "",
        name: "Larry Martinez",
        role: "IT Support Specialist",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 13,
        userId: "",
        name: "Michelle Rodriguez",
        role: "HR Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 14,
        userId: "",
        name: "Nathan Anderson",
        role: "Financial Analyst",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 15,
        userId: "",
        name: "Olivia Taylor",
        role: "Social Media Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 16,
        userId: "",
        name: "Patrick Clark",
        role: "Account Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 17,
        userId: "",
        name: "Quinn Lewis",
        role: "UX Researcher",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 18,
        userId: "",
        name: "Rachel Young",
        role: "Graphic Designer",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 19,
        userId: "",
        name: "Samuel Scott",
        role: "Operations Manager",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
      {
        id: 20,
        userId: "",
        name: "Tanya Adams",
        role: "Legal Advisor",
        avatar: "[invalid URL removed]",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
    ]);

    return {
      //state
      dummy,
      users
    };
  },
  { persist: true }
);
