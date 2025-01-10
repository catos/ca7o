// "use client"

// import { CheckIcon, UndoIcon } from "lucide-react"

// // import { updateState } from "@/data/todo-actions"

// import { Button } from "@/components/ui/button"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"
// import { Tables } from "@/types/database"

// type Props = {
//   note: Tables<"notes">
//   value?: number
// }

// export default function UpdateState({ note, value = 0 }: Props) {
//   const handleClick = () => {
//     // updateState(todo.id, value)
//     console.log("TODO: updateState")
//   }
//   return (
//     <Tooltip>
//       <TooltipTrigger asChild>
//         <Button size="icon" onClick={handleClick}>
//           {note.state === 0 ? <CheckIcon /> : <UndoIcon />}
//         </Button>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p>
//           {note.state === 0 ? "Marker som ferdig" : "Flytt tilbake til TODO"}
//         </p>
//       </TooltipContent>
//     </Tooltip>
//   )
// }
