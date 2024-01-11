"use client"

import Icon from "@/components/icon"
import { Todo } from "@prisma/client"

import { updateState } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"

type Props = {
  todo: Todo
  value?: number
}

export default function UpdateState({ todo, value = 0 }: Props) {
  const handleClick = () => {
    updateState(todo.id, value)
  }
  return (
    <Button size="icon" onClick={handleClick}>
      <Icon name={todo.state === 0 ? "check" : "undo2"} />
    </Button>
  )
}
