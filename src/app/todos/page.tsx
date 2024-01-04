import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { getTodos } from "@/data/todo-actions"

import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

import CreateForm from "./create-form"
import TodoItem from "./todo-item"

export default async function Todos() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <p>
        You must <Link href="/auth/sign-in">log in</Link> in to use TODOs
      </p>
    )
  }

  const data = await getTodos(session.user.id)
  if (!data || data.length === 0) {
    return (
      <>
        <CreateForm />
        <div className="py-4 text-xl text-center">
          No TODOs... TODO: start creating some!
        </div>
      </>
    )
  }

  const todos = data?.filter((p) => p.state === 0) ?? []
  const todones = data?.filter((p) => p.state > 0) ?? []

  return (
    <>
      <CreateForm />

      <Title type="h2" className="my-4">
        TODOs
      </Title>
      <div className="grid grid-cols-1 gap-2">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} nextState={1} />
        ))}
      </div>

      <Title type="h2" className="my-4">
        TODONEs
      </Title>
      <div className="flex flex-col gap-2">
        {todones?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}
