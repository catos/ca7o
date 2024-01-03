"use client"

import { Todo } from "@prisma/client"

import { deleteTodo } from "@/data/todo-actions"

import IconButton from "@/components/ui/icon-button"

export default function DeleteFrom({ todo }: { todo: Todo }) {
  const handleClick = () => {
    deleteTodo(todo.id)
  }
  return <IconButton onClick={handleClick} name="delete" />
}
