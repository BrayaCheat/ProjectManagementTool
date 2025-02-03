import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { name, userId } = await readBody(event);
    if (!name || typeof name !== "string" || name.trim() === "") {
      return {
        message:
          "Invalid project name: Name is required and must be a non-empty string.",
        status: 400,
      };
    }
    const findExist = await prisma.project.findFirst({
      where: { name },
    });
    if (findExist) {
      return {
        message: "Project is already exist.",
        status: 400,
      };
    }
    const data = await prisma.project.create({
      data: { name: name, userId: userId },
    });
    return {
      message: "Project created.",
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
