import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { name, color, userId, projectId } = await readBody(event);
    if (!name || typeof name !== "string" || name.trim() === "") {
      return {
        message:
          "Invalid group name: Name is required and must be a non-empty string.",
        status: 400,
      };
    }
    const findProject = await prisma.project.findFirst({
      where: { id: projectId },
    });
    if (!findProject) {
      return {
        message: "Project not found.",
        status: 400,
      };
    }
    const duplicateGroup = await prisma.category.findFirst({
      where: { name },
    });
    if (duplicateGroup) {
      return {
        message: "Group is already exist.",
        status: 400,
      };
    }
    const data = await prisma.category.create({
      data: { name: name, userId: userId, projectId: projectId, color: color },
    });
    return {
      message: "Group created.",
      data: data,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: error,
      success: false,
    });
  } finally {
    await prisma.$disconnect();
  }
});
