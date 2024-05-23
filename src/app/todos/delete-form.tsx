"use client"

import { Todo } from "@prisma/client"
import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { TrashIcon } from "lucide-react"

// import { deleteTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export default function DeleteFrom({ todo }: { todo: Todo }) {
  const handleClick = () => {
    // deleteTodo(todo.id)
    console.log("TODO: delete todo")
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="destructive" size="icon" onClick={handleClick}>
          <TrashIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Slett TODO</p>
      </TooltipContent>
    </Tooltip>
  )
}
