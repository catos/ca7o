"use server"

import { handleDBError } from "@/lib/error-handler"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getRecipes(q?: string | null, limit: number = 100) {
  try {
    const supabase = await createClient()
    const { data, error } =
      q && q !== ""
        ? await supabase.from("recipes").select().ilike("title", `%${q}%`)
        : await supabase
            .from("recipes")
            .select()
            .order("updated_at", { ascending: false })
            .limit(limit)

    if (error) {
      throw error
    }

    return data ?? []
  } catch (error) {
    handleDBError(error, "Failed to get recipes.")
  }

  return []
}

export async function getRecipe(id: string) {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("recipes")
      .select()
      .eq("id", id)
      .single()

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    handleDBError(error, "Failed to get recipe.")
  }

  return null
}

export async function updateRecipe(formData: FormData) {
  try {
    if (!formData.has("id")) {
      throw new Error("Missing recipe id")
    }

    const id = formData.get("id") as string

    const form = {
      title: formData.get("title") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      ingredients: formData.get("ingredients") as string,
      instructions: formData.get("instructions") as string,
      updated_at: new Date().toISOString(),
    }

    const supabase = await createClient()

    const { error } = await supabase.from("recipes").update(form).eq("id", id)
    console.log("error", error)
    if (error) {
      throw error
    }

    revalidatePath(`/recipes/${id}`)
  } catch (error) {
    handleDBError(error, "Failed to update recipe.")
  }
}

export async function createRecipe(formData: FormData) {
  let redirectUrl = "/recipes/"
  try {
    const date = new Date().toISOString()
    const form = {
      title: formData.get("title") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      ingredients: formData.get("ingredients") as string,
      instructions: formData.get("instructions") as string,
      created_at: date,
      updated_at: date,
    }

    const supabase = await createClient()
    const { data, error } = await supabase
      .from("recipes")
      .insert(form)
      .select()
      .single()

    if (error) {
      throw error
    }

    if (data) {
      redirectUrl = `/recipes/${data.id}`
    }

    revalidatePath("/recipes/")
  } catch (error) {
    handleDBError(error, "Failed to create recipe.")
  }

  redirect(redirectUrl)
}

export async function createRecipeJSON(formData: FormData) {
  let newRecipeId: string | null = null

  try {
    const json = formData.get("json") as string
    const recipe = JSON.parse(json)

    const date = new Date().toISOString()
    recipe.created_at = date
    recipe.updated_at = date

    const supabase = await createClient()
    const { data, error } = await supabase
      .from("recipes")
      .insert(recipe)
      .select()
      .single()

    if (error) {
      throw error
    }

    if (data) {
      newRecipeId = data.id
    }
  } catch (error) {
    handleDBError(error, "Failed to create recipe.")
  }

  newRecipeId ? redirect(`/recipes/${newRecipeId}`) : redirect("/recipes/")
}

export async function deleteRecipe(formData: FormData) {
  try {
    if (!formData.has("id")) {
      throw new Error("Missing recipe id")
    }

    const id = formData.get("id") as string

    const supabase = await createClient()
    await supabase.from("recipes").delete().eq("id", id)

    revalidatePath(`/recipes/${id}`)
  } catch (error) {
    handleDBError(error, "Failed to delete recipe.")
  }

  redirect("/recipes/")
}
