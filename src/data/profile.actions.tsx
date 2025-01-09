"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function update(formData: FormData) {
  try {
    const id = formData.get("id") as string
    if (id === null) {
      throw new Error("Profile not found!")
    }

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not found!")
    }

    const data = {
      user_id: user.id,
      updated_at: new Date().toISOString(),
      fullname: formData.get("fullname") as string,
      avatar_url: formData.get("avatar") as string,
    }

    const { error } = await supabase.from("profiles").update(data).eq("id", id)
    if (error) {
      throw error
    }

    revalidatePath("/profile")
  } catch (error) {
    console.error("Error updating profile!", error)
    redirect("/error")
  }
}

export async function getProfile(userId: string) {
  const supabase = createClient()

  try {
    const { data, error, status } = await supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .single()

    if (error && status !== 406) {
      console.log(error)
      throw error
    }

    if (data) {
      return data
    }
  } catch (error) {
    console.error("Error loading user data!")
  }

  return null
}
