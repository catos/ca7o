import prisma from "@/lib/prisma"

export async function getPosts(authorId: number) {
  const userPosts = await prisma.post.findMany({
    where: {
      authorId,
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

  return userPosts
}
