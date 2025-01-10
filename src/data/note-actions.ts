"use server"

import { handleDBError } from "@/lib/error-handler"
import { createClient } from "@/utils/supabase/server"

export async function getNotes(userId: string) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("notes")
      .select()
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

// export async function createTodo(formData: FormData) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     throw new Error("Not authenticated")
//   }

//   const validatedFields = CreateForm.safeParse(Object.fromEntries(formData))
//   if (!validatedFields.success) {
//     throw new Error("Failed to create todo, missing fields.")
//   }

//   const data = {
//     ...validatedFields.data,
//     authorId: +session.user.id,
//   }

//   try {
//     await prisma.todo.create({ data })
//   } catch (error) {
//     // TODO: reconsider this .... handleDBError(error, "Failed to create todo.")
//     throw new Error("Database error. Failed to create todo.")
//   }

//   revalidatePath("/todos")
//   redirect("/todos")
// }

// // TODO: use this method as example for other methods
// export async function updateTodo(formData: FormData) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     throw new Error("Not authenticated")
//   }

//   // TODO: find a better way to do this
//   const data = {
//     id: +(formData.get("id")?.toString() ?? ""),
//     title: formData.get("title")?.toString(),
//     content: formData.get("content")?.toString(),
//     state: +(formData.get("state")?.toString() ?? ""),
//     authorId: +session.user.id,
//     updatedAt: new Date(),
//   }

//   const validatedFields = UpdateForm.safeParse(data)
//   if (!validatedFields.success) {
//     throw new Error("Failed to update todo, missing fields.")
//   }

//   try {
//     await prisma.todo.update({
//       where: { id: data.id },
//       data,
//     })
//   } catch (error) {
//     throw new Error("Database error. Failed to update todo.")
//   }

//   revalidatePath("/todos")
//   redirect("/todos")
// }

// export async function updateState(id: number, state: number = 0) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     throw new Error("Not authenticated")
//   }

//   try {
//     await prisma.todo.update({
//       where: {
//         id,
//       },
//       data: {
//         state,
//       },
//     })
//   } catch (error) {
//     throw new Error("Failed to mark todo as done.")
//   }

//   revalidatePath("/todos")
//   redirect("/todos")
// }

// export async function deleteTodo(id: number) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     throw new Error("Not authenticated")
//   }

//   // TODO: check if user is the author of the todo

//   try {
//     await prisma.todo.delete({
//       where: {
//         id,
//       },
//     })
//   } catch (error) {
//     throw new Error("Failed to delete todo.")
//   }

//   revalidatePath("/todos")
//   redirect("/todos")
// }
