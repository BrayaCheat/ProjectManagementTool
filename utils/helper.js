import { File, FileCode, FileCheck } from "lucide-vue-next";

export const priorityList = ['Low', 'Medium', 'High']

export const statusList = ['COMPLETED', 'PENDING', 'IN PROGRESS']

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
      return "text-green-500 border-green-500 bg-green-50";
    case "PENDING":
      return "text-yellow-500 border-yellow-500 bg-yellow-50";
    case "IN PROGRESS":
      return "text-blue-500 border-blue-500 bg-blue-50";
    default:
      return "";
  }
};

export const statusIcon = (val) => {
  switch (val) {
    case "COMPLETED":
      return FileCheck;
    case "PENDING":
      return File;
    case "IN PROGRESS":
      return FileCode;
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
