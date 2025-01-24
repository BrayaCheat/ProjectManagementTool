import { prisma } from "~/server/lib/prisma"

export default defineEventHandler(async (event) => {
  try {
    const {id} = event.context.params

    return {
      id: id
    }
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Fail to retrieve data"
    })
  }finally{
    await prisma.$disconnect()
  }
})