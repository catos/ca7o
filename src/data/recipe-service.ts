import prisma from "@/lib/prisma"

// TODO: define interfaces for all the data types
// TODO: try-catch all the things and handle errors

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
    console.log("Unable to update recipe", error)
    return null
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
    console.log("Unable to create recipe", error)
    return null
  }
}
