"use client"

import Icon from "@/components/icon"
import { Todo } from "@prisma/client"
import { CheckIcon, UndoIcon } from "lucide-react"

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
      {todo.state === 0 ? <CheckIcon /> : <UndoIcon />}
    </Button>
  )
}
