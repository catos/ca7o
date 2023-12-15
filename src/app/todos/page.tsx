import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { getTodos } from "@/data/todo-actions"

import Title from "@/components/ui/title"

export default async function Todos() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  const data = await getTodos(session.user.id)

  return (
    <>
      <Title>Posts</Title>
      <pre className="flex flex-col items-center justify-center">
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}
