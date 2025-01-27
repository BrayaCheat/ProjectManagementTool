import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;
    const findExist = await prisma.project.findFirst({
      where: {id}
    })
    if(!findExist){
      return {
        message: "Project not found",
        status: 400
      }
    }
    return {
      data: findExist,
      message: "Success",
      status: 200
    }
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Fail to retrieve data",
    });
  } finally {
    await prisma.$disconnect();
  }
});
