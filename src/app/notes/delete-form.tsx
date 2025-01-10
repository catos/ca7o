"use client"

import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { TrashIcon } from "lucide-react"

// import { deleteTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"
import { Tables } from "@/types/database"

type Props = {
  note: Tables<"notes">
}

export function DeleteForm({ note }: Props) {
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
        <p>Slett note</p>
      </TooltipContent>
    </Tooltip>
  )
}
