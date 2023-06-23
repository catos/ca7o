import { signJwtAccessToken } from "@/lib/jwt"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

interface IRequestBody {
  username: string
  password: string
}

export async function POST(request: Request) {
  const body: IRequestBody = await request.json()

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  })

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user
    const accessToken = signJwtAccessToken(userWithoutPassword)
    const result = {
      ...userWithoutPassword,
      accessToken,
    }
    return new Response(JSON.stringify(result))
  } else {
    return new Response(JSON.stringify(null))
  }
}
