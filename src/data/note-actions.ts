"use server"

import { handleDBError } from "@/lib/error-handler"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function getNotes(userId: string) {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("notes")
      .select()
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })

    if (error) {
      throw error
    }

    return data ?? []
  } catch (error) {
    handleDBError(error, "Failed to get notes.")
  }

  return []
}

// import { authOptions } from "@/lib/auth"
// import { handleDBError } from "@/lib/error-handler"
// import prisma from "@/lib/prisma"
// import { getServerSession } from "next-auth"
// import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation"
// import { z } from "zod"

// const FormSchema = z.object({
//   id: z.number(),
//   title: z.string({ required_error: "Title is required." }),
//   content: z.string(),
//   authorId: z.number({ required_error: "Author is required." }),
//   createdAt: z.date(),
//   updatedAt: z.date(),
//   state: z.number({ required_error: "State is required." }),
// })

// const CreateForm = FormSchema.pick({ title: true, content: true })
// const UpdateForm = FormSchema.pick({
//   id: true,
//   title: true,
//   content: true,
//   state: true,
// })

// export async function getTodos(authorId: number): Promise<Todo[]> {
//   try {
//     return await prisma.todo.findMany({
//       where: {
//         authorId: +authorId,
//       },
//       orderBy: {
//         id: "desc",
//       },
//     })
//   } catch (error) {
//     throw new Error("Failed to get todos.")
//   }
// }

export async function createNote(formData: FormData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found!")
  }

  const date = new Date().toISOString()

  const form = {
    parent_id: formData.get("parent_id") as string | null,
    content: formData.get("content") as string,
    user_id: user.id,
    created_at: date,
    updated_at: date,
    state: formData.get("state") ? +(formData.get("state") as string) : 1,
  }

  if (!form.content) {
    throw new Error("Content is required.")
  }

  const { data, error } = await supabase
    .from("notes")
    .insert(form)
    .select()
    .single()

  // TODO: use handleDBError everywhere in actions
  if (error) {
    handleDBError(error, "Failed to delete note.")
  }

  revalidatePath("/notes")

  return data
}

export async function updateNote(formData: FormData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found!")
  }

  const date = new Date().toISOString()

  const form = {
    id: formData.get("id") as string,
    content: formData.get("content") as string,
    user_id: user.id,
    updated_at: date,
    state: formData.get("state") ? +(formData.get("state") as string) : 1,
  }

  if (!form.id) {
    throw new Error("Id is required.")
  }

  if (!form.content) {
    throw new Error("Content is required.")
  }

  const { data, error } = await supabase
    .from("notes")
    .update(form)
    .eq("id", form.id)
    .select()
    .single()

  if (error) {
    handleDBError(error, "Failed to update note.")
  }

  revalidatePath("/notes")

  return data
}

export async function deleteNote(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("notes").delete().eq("id", id)

  if (error) {
    handleDBError(error, "Failed to delete note.")
  }

  revalidatePath("/notes")

  return true
}
