"use client"

import { Todo } from "@prisma/client"

import { updateState } from "@/data/todo-actions"

import IconButton from "@/components/ui/icon-button"

type Props = {
  todo: Todo
  value?: number
}

export default function UpdateState({ todo, value = 0 }: Props) {
  const handleClick = () => {
    updateState(todo.id, value)
  }
  return (
    <IconButton
      onClick={handleClick}
      name={todo.state === 0 ? "check" : "arrowUturnLeft"}
    />
  )
}
