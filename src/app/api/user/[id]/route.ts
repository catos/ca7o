import { verifyJwt } from "@/lib/jwt"
import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const accessToken = request.headers.get("authorization")
  // TODO: investigate getServerSession({ req: request })

  if (!accessToken || !verifyJwt(accessToken)) {
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
