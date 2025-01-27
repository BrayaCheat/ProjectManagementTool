import { prisma } from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;
    const { name } = await readBody(event);

    if (!id) {
      return {
        message: "Invalid id",
        status: 400,
      };
    }
    if (!name) {
      return {
        message: "Invalid project name",
        status: 400,
      };
    }
    const findExist = await prisma.project.findFirst({
      where: {
        id: id,
      },
    });
    if (!findExist) {
      return {
        message: "Project not found",
        status: 400,
      };
    }
    const updatedProject = await prisma.project.update({
      where: { id },
      data: { name: name },
    });
    return {
      data: updatedProject,
      message: "Project updated",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error",
    });
  } finally {
    await prisma.$disconnect();
  }
});
