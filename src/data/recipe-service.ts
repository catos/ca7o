import prisma from "@/lib/prisma"
import { Recipe } from "@prisma/client"

export async function getRecipes() {
  return await prisma.recipe.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })
}

export async function getRecipe(slug: number) {
  return await prisma.recipe.findUnique({
    where: {
      id: slug,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })
}

export async function updateRecipe(id: number, { title }: { title: string }) {
  try {
    return await prisma.recipe.update({
      where: {
        id,
      },
      data: { title },
    })
  } catch (error) {
    // TODO: how to handle errors?
    console.log("error", error)
    return { error }
  }
}
