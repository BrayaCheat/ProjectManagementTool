import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { userId } = getQuery(event);
    return {
      message: userId ? `Get user id: ${userId}` : "UserId is required.",
      userId: userId || "None",
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
