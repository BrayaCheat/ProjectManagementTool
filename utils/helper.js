export const priority = (val) => {
  switch (val) {
    case 1:
      return "High";
    case 2:
      return "Medium";
    case 3:
      return "Low";
    default:
      return "None";
  }
};

export const statusColor = (val) => {
  switch (val) {
    case "COMPLETED":
      return "text-green-500";
    case "PENDING":
      return "text-yellow-500";
    case "IN PROGRESS":
      return "text-blue-500";
    default:
      return "";
  }
};

export const priorityColor = (val) => {
  switch (val) {
    case 1:
      return "text-red-500";
    case 2:
      return "text-yellow-500";
    case 3:
      return "text-green-500";
    default:
      return "text-inherit";
  }
};
