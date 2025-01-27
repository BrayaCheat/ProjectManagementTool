import { prisma } from "~/server/db/prisma";
export default defineEventHandler(async (event) => {
  try {
    const { title, userId } = await readBody(event);
    const taskData = {
      title,
      userId,
    };
    return {
      data: taskData,
    };
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Invalid form",
    });
  }
});
