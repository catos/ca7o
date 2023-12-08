import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function getUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  })
}

export async function getUser({ email, id }: { email?: string; id?: number }) {
  if (typeof id !== "undefined") {
    return await prisma.user.findFirst({
      where: {
        id: +id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    })
  }

  return await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  })
}

type UpdateUserType = {
  name: string
  email: string
}

export async function updateUser(id: number, { name, email }: UpdateUserType) {
  try {
    return await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
      },
    })
  } catch (error) {
    // TODO: consolidate error handling
    console.log("Unable to update user", error)
    return null
  }
}

export async function createUser({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  const existingUser = await getUser({ email })

  if (existingUser) {
    return null
  }

  try {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    return await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    })
  } catch (error) {
    console.log("Unable to create user", error)
    return null
  }
}

export async function deleteUser(id: number) {
  try {
    return await prisma.user.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.log("Unable to delete user", error)
    return null
  }
}
