"use client"

import { Todo } from "@prisma/client"
import { CheckIcon, UndoIcon } from "lucide-react"

import { updateState } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
  todo: Todo
  value?: number
}

export default function UpdateState({ todo, value = 0 }: Props) {
  const handleClick = () => {
    updateState(todo.id, value)
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" onClick={handleClick}>
          {todo.state === 0 ? <CheckIcon /> : <UndoIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {todo.state === 0 ? "Marker som ferdig" : "Flytt tilbake til TODO"}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
