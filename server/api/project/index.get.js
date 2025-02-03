import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { userId } = getQuery(event);
    const data = await prisma.project.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        categories: {
          select: {
            id: true,
            name: true,
            color: true
          },
        },
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
