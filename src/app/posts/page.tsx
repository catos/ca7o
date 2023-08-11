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
      <h1 className="text-4xl font-bold">Posts</h1>
      <pre className="flex flex-col items-center justify-center">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
