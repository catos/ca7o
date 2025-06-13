"use client"

import { Button } from "@/components/ui/button"

// type Props = {
//   note: Tables<"notes">
//   value?: number
// }

export default function UpdateState() {
  const handleClick = () => {
    // updateState(todo.id, value)
    console.log("TODO: updateState")
  }

  return <Button onClick={handleClick}>TODO: Implement this feature</Button>
}
