import { Tables } from "@/types/database"

type Props = {
  note: Tables<"notes">
}

export function Note({ note }: Props) {
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md">
      <div>State: {note.state}</div>
      <div>{note.content}</div>
    </div>
  )
}
