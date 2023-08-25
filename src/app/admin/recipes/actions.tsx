"use server"

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createRecipe, getRecipe, updateRecipe } from "@/data/recipe-service"

/**
 * Create a new recipe
 * @param formData recipe form data
 */
export async function create(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  // TODO: any way to simplify and validate this? zod ?
  const title = formData.get("title")
  if (!title || typeof title !== "string") {
    throw new Error("Title is required")
  }

  const image = formData.get("image")
  if (!image || typeof image !== "string") {
    throw new Error("Image is required")
  }

  const description = formData.get("description")
  if (!description || typeof description !== "string") {
    throw new Error("Description is required")
  }

  const ingredients = formData.get("ingredients")
  if (!ingredients || typeof ingredients !== "string") {
    throw new Error("Ingredients is required")
  }

  const instructions = formData.get("instructions")
  if (!instructions || typeof instructions !== "string") {
    throw new Error("Instructions is required")
  }

  const recipe = await createRecipe({
    authorId: session.user.id,
    title,
    image,
    description,
    ingredients,
    instructions,
  })

  if (!recipe) {
    throw new Error("Failed to create recipe")
  }

  revalidatePath(`/admin/recipes/${recipe.id}`)
  redirect(`/admin/recipes/${recipe.id}`)
}

/**
 * Update recipe with form data and revalidate
 * @param formData recipe form data
 * @returns ???
 */
export async function update(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  const id = formData.get("id")
  if (!id || typeof id !== "string") {
    return
  }

  const recipe = await getRecipe(+id)
  if (!recipe) {
    throw new Error(`Recipe with id=${id} not found`)
  }

  // TODO: any way to simplify and validate this? zod ?
  const title = formData.get("title")
  if (!title || typeof title !== "string") {
    return
  }

  const image = formData.get("image")
  if (!image || typeof image !== "string") {
    return
  }

  const description = formData.get("description")
  if (!description || typeof description !== "string") {
    // TODO: make this work ? (and error.tsx)
    throw new Error("Description is required!")
  }

  const ingredients = formData.get("ingredients")
  if (!ingredients || typeof ingredients !== "string") {
    return
  }

  const instructions = formData.get("instructions")
  if (!instructions || typeof instructions !== "string") {
    return
  }

  await updateRecipe(recipe.id, {
    title,
    image,
    description,
    ingredients,
    instructions,
  })

  revalidatePath(`/admin/recipes/${recipe.id}/edit`)
}

/**
 * Update recipe with form data and redirect to recipe page
 * @param formData recipe form data
 * @returns ???
 */
export async function updateAndClose(formData: FormData) {
  const id = formData.get("id")
  if (!id || typeof id !== "string") {
    return
  }

  update(formData)
  redirect(`/recipes/${id}`)
}
