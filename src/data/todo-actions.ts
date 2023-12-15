import { handleDBError } from "@/lib/error-handler"
import prisma from "@/lib/prisma"

export async function getTodos(authorId: number) {
  try {
    return await prisma.todo.findMany({
      where: {
        authorId: +authorId,
      },
    })
  } catch (error) {
    handleDBError(error, "Failed to get todos.")
  }
}
