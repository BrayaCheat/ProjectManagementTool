import { prisma } from "~/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { name } = await readBody(event);
    if (!name || typeof name !== "string" || name.trim() === "") {
      throw createError({
        statusCode: 404,
        statusMessage:
          "Invalid project name: Name is required and must be a non-empty string.",
      });
    }
    const findExist = await prisma.project.findFirst({
      where: {
        name: name
      }
    });
    if (findExist) {
      return {
        message: "Project is already exist.",
        success: false
      }
    }
    const data = await prisma.project.create({
      data: {
        name: name.toString(),
      },
    });
    return {
      message: "Project created successful.",
      data: data,
      success: true,
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
