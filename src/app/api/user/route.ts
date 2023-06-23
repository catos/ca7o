import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

interface IRequestBody {
  name: string
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: IRequestBody = await request.json()

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  })

  const { password, ...userWithoutPassword } = user
  return new Response(JSON.stringify(userWithoutPassword))
}
