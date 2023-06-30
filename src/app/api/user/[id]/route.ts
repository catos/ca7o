import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"

export async function GET(
  _req: Request,
  { params }: { params: { id: number } }
) {
  const session = await getServerSession(authOptions)
  console.log("### SESSION: ", session)

  if (!session) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
        statusText: "unauthorized",
      }
    )
  }

  const userPosts = await prisma.post.findMany({
    where: {
      authorId: +params.id,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  })

  return new Response(JSON.stringify(userPosts))
}
