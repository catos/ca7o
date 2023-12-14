"use server"

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

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

export async function updateRecipe(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  // TODO: better validation
  const schema = z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    ingredients: z.string(),
    instructions: z.string(),
  })

  const form = schema.parse(Object.fromEntries(formData))
  const { id, ...formWithoutId } = form
  const data = {
    ...formWithoutId,
    updatedAt: new Date().toISOString(),
  }

  try {
    await prisma.recipe.update({ where: { id: +id }, data })

    // TODO: revalidate multiple paths /recipes/:id and /admin/recipes/:id
    revalidatePath(`/admin/recipes/${id}`)
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to update recipe.")
  }

  redirect(`/admin/recipes/${id}`)
}

export async function createRecipe(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }
  const authorId = session.user.id

  // TODO: better validation
  const schema = z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    ingredients: z.string(),
    instructions: z.string(),
  })

  const form = schema.parse(Object.fromEntries(formData))
  const data = {
    ...form,
    authorId: +authorId,
  }

  try {
    const recipe = await prisma.recipe.create({ data })

    // TODO: revalidate multiple paths /recipes/:id and /admin/recipes/:id
    revalidatePath(`/admin/recipes/${recipe.id}`)
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to create recipe.")
  }
  redirect("/admin/recipes/")
}

export async function deleteRecipe(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  const schema = z.object({
    id: z.string(),
  })

  const { id } = schema.parse(Object.fromEntries(formData))

  try {
    await prisma.recipe.delete({ where: { id: +id } })
    // TODO: revalidate multiple paths /recipes/:id and /admin/recipes/:id
    revalidatePath(`/admin/recipes/${id}`)
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to delete recipe.")
  }

  redirect("/admin/recipes/")
}
