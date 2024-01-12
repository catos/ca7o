"use server"

import { authOptions } from "@/lib/auth"
import { handleDBError } from "@/lib/error-handler"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export async function getUsers() {
  try {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    })
  } catch (error) {
    // TODO: hmm, what to do here?
    // handleDBError(error, "Failed to get users.")
    return []
  }
}

export async function getUser(email: string) {
  try {
    return await prisma.user.findFirst({
      where: {
        email,
      },
    })
  } catch (error) {
    handleDBError(error, `Failed to get user by email: ${email}.`)
  }
}

export async function updateUser(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  // TODO: better validation
  const schema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    avatar: z.string(),
  })

  const form = schema.parse(Object.fromEntries(formData))
  const { id, ...data } = form

  // TODO: check if email is already taken

  try {
    await prisma.user.update({
      where: { id: +id },
      data,
    })

    // TODO: revalidate multiple paths /recipes/:id and /admin/recipes/:id
    revalidatePath(`/admin/users/${data.email}`)
  } catch (error) {
    handleDBError(error, "Failed to update user.")
  }
}

export async function createUser(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  // TODO: better validation
  const schema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  })

  const { name, email, password } = schema.parse(Object.fromEntries(formData))

  const existingUser = await getUser(email)
  if (existingUser) {
    return null
  }

  try {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    })
    revalidatePath("/admin/users")
  } catch (error) {
    handleDBError(error, "Failed to create user.")
  }
  redirect("/admin/users/")
}

export async function deleteUser(formData: FormData) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    throw new Error("Not authenticated")
  }

  const schema = z.object({
    id: z.string(),
  })

  const { id } = schema.parse(Object.fromEntries(formData))

  try {
    await prisma.user.delete({ where: { id: +id } })
    revalidatePath("/admin/users")
  } catch (error) {
    handleDBError(error, "Failed to delete user.")
  }
  redirect("/admin/users/")
}
