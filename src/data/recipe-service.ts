import prisma from "@/lib/prisma"

export async function getRecipes() {
  try {
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
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to get recipes.")
  }
}

export async function getRecipe(slug: number) {
  try {
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
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to get recipe.")
  }
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
      where: { id },
      data: { title, image, description, ingredients, instructions },
    })
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to update recipe.")
  }
}

export async function createRecipe({
  authorId,
  title,
  image,
  description,
  ingredients,
  instructions,
}: {
  authorId: number
  title: string
  image: string
  description: string
  ingredients: string
  instructions: string
}) {
  try {
    return await prisma.recipe.create({
      data: {
        title,
        image,
        description,
        ingredients,
        instructions,
        authorId: +authorId,
      },
    })
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to create recipe.")
  }
}

export async function deleteRecipe(id: number) {
  try {
    return await prisma.recipe.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to delete recipe.")
  }
}
