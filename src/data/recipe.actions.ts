"use server"

import { handleDBError } from "@/lib/error-handler"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getRecipes(limit: number = 100) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
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
    const supabase = createClient()
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
  let redirectUrl = "/recipes/"

  try {
    if (!formData.has("id")) {
      throw new Error("Missing recipe id")
    }

    const id = formData.get("id") as string
    if (id) {
      redirectUrl = `/recipes/${id}`
    }

    const form = {
      title: formData.get("title") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      ingredients: formData.get("ingredients") as string,
      instructions: formData.get("instructions") as string,
      updated_at: new Date().toISOString(),
    }

    const supabase = createClient()

    const { error } = await supabase.from("recipes").update(form).eq("id", id)
    if (error) {
      throw error
    }

    revalidatePath(`/recipes/${id}`)
  } catch (error) {
    handleDBError(error, "Failed to update recipe.")
  }

  // redirect(redirectUrl)
}

export async function createRecipe(formData: FormData) {
  let redirectUrl = "/recipes/"
  try {
    const form = {
      title: formData.get("title") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      ingredients: formData.get("ingredients") as string,
      instructions: formData.get("instructions") as string,
      created_at: new Date().toISOString(),
    }

    const supabase = createClient()
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

export async function deleteRecipe(formData: FormData) {
  try {
    if (!formData.has("id")) {
      throw new Error("Missing recipe id")
    }

    const id = formData.get("id") as string

    const supabase = createClient()
    await supabase.from("recipes").delete().eq("id", id)

    revalidatePath(`/recipes/${id}`)
  } catch (error) {
    handleDBError(error, "Failed to delete recipe.")
  }

  redirect("/recipes/")
}
