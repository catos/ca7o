"use client"

import { Todo } from "@prisma/client"

import { deleteTodo } from "@/data/todo-actions"

import Button from "@/components/ui/button"

export default function DeleteFrom({ todo }: { todo: Todo }) {
  const handleClick = () => {
    deleteTodo(todo.id)
  }

  return (
    <Button color="danger" onClick={handleClick}>
      Delete
    </Button>
  )
}
