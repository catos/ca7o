"use client"

import { TrashIcon } from "lucide-react"

// import { deleteTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"
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
    // <Tooltip>
    //   <TooltipTrigger asChild>
    <Button onClick={handleClick}>
      <TrashIcon />
    </Button>
    //   </TooltipTrigger>
    //   <TooltipContent>
    //     <p>Slett note</p>
    //   </TooltipContent>
    // </Tooltip>
  )
}
