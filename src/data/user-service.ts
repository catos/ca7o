import prisma from "@/lib/prisma"

export async function getUser(email: string) {
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
