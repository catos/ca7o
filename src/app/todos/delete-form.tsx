"use client"

import { Todo } from "@prisma/client"
import { TrashIcon } from "lucide-react"

import { deleteTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"

export default function DeleteFrom({ todo }: { todo: Todo }) {
  const handleClick = () => {
    deleteTodo(todo.id)
  }

  return (
    <Button variant="destructive" size="icon" onClick={handleClick}>
      <TrashIcon />
    </Button>
  )
}
