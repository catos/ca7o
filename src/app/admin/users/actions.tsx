"use server"

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// TODO: sigh...naming!!! drop service entirely ? is this file the real service ?
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "@/data/user-actions"

/**
 * Create a new user
 * @param formData user form data
 */
export async function create(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  // TODO: any way to simplify and validate this? zod ?
  const name = formData.get("name")
  if (!name || typeof name !== "string") {
    throw new Error("name is required")
  }

  const email = formData.get("email")
  if (!email || typeof email !== "string") {
    throw new Error("email is required")
  }

  const password = formData.get("password")
  if (!password || typeof password !== "string") {
    throw new Error("password is required")
  }

  // TODO: confirm password || verify from mail ?

  const user = await createUser({
    name,
    email,
    password,
  })

  if (!user) {
    throw new Error("Failed to create user")
  }

  revalidatePath(`/admin/users/${user.id}`)
  redirect(`/admin/users/${user.id}`)
}

/**
 * Update user with form data and revalidate
 * @param formData user form data
 * @returns a promise of nothingness!
 */
export async function update(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  const email = formData.get("email")
  if (!email || typeof email !== "string") {
    return
  }

  const user = await getUser({ email })
  if (!user) {
    throw new Error(`User with email=${email} not found`)
  }

  const name = formData.get("name")
  if (!name || typeof name !== "string") {
    return
  }

  // TODO: update password on separate function ?
  // const password = formData.get("password")
  // if (!password || typeof password !== "string") {
  //   return
  // }

  await updateUser(user.id, {
    name,
    email,
  })

  revalidatePath(`/admin/users/${user.id}`)
}

/**
 * Delete user from DB
 * @param id Id of the user to delete
 */
export async function del(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  const id = formData.get("id")
  if (!id || typeof id !== "string") {
    throw new Error("id is required")
  }

  await deleteUser(parseInt(id))
}
