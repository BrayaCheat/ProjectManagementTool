import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const data = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      data: data,
      message: "Projects retrieved successfully",
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error,
    });
  } finally {
    await prisma.$disconnect();
  }
});
