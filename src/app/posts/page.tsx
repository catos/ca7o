import Title from "@/components/ui/title"
import { getPosts } from "@/data/post-service"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Posts() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  const data = await getPosts(1)

  return (
    <>
      <Title>Posts</Title>
      <pre className="flex flex-col items-center justify-center">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
