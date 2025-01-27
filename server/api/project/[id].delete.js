import { prisma } from "@/server/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;
    if (!id) {
      return {
        data: "Invalid id",
        success: false,
      };
    }
    const findExist = await prisma.project.findFirst({
      where: {
        id: id,
      },
    });
    if (!findExist) {
      return {
        data: "Project is not exist",
        success: false,
      };
    }
    const data = await prisma.project.delete({
      where: {
        id: id,
      },
    });
    if (data) {
      return {
        data: `Project ${data.name} deleted`,
        success: true,
      };
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error",
    });
  }
});
