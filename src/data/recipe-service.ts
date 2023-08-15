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

export async function updateRecipe(
  id: number,
  {
    title,
    image,
    description,
    ingredients,
    instructions,
  }: {
    title: string
    image: string
    description: string
    ingredients: string
    instructions: string
  }
) {
  try {
    return await prisma.recipe.update({
      where: {
        id,
      },
      data: { title, image, description, ingredients, instructions },
    })
  } catch (error) {
    // TODO: how to handle errors?
    console.log("error", error)
    return { error }
  }
}
