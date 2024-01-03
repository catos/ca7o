import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { getTodos } from "@/data/todo-actions"

import Title from "@/components/ui/title"

import CreateForm from "./create-form"
import TodoItem from "./todo-item"

export default async function Todos() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  const data = await getTodos(session.user.id)
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
