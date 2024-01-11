"use client"

import Icon from "@/components/icon"
import { Todo } from "@prisma/client"

import { deleteTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"

export default function DeleteFrom({ todo }: { todo: Todo }) {
  const handleClick = () => {
    deleteTodo(todo.id)
  }

  return (
    <Button variant="destructive" size="icon" onClick={handleClick}>
      <Icon name="x" />
    </Button>
  )
}
