import { getPosts } from "@/data/posts"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Posts() {
  const session = await getServerSession(authOptions)
  console.log("### SESSION: ", Boolean(session))

  if (!session) {
    return null
  }

  const data = await getPosts(1)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Posts</h1>
      <pre className="flex flex-col items-center justify-center">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}
