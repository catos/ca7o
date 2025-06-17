import {
  ArchiveIcon,
  Palette,
  PlusIcon,
  SaveIcon,
  TrashIcon,
} from "lucide-react"
import { twMerge } from "tailwind-merge"
import { createNote, deleteNote } from "@/data/note-actions"
import { Button } from "../ui/button"
import { NoteWithChildren } from "./types"

type Props = {
  note: NoteWithChildren
  includeSubmitButton?: boolean
  alwaysShow?: boolean
}

export function NoteOptions({
  note,
  includeSubmitButton = false,
  alwaysShow = false,
}: Props) {
  const handleAdd = async () => {
    const form = new FormData()
    form.append("parent_id", note.id)
    await createNote(form)
  }

  const handleSetBackground = async () => {
    console.log("TODO: Setting background for note", note.id)
  }

  const handleArchive = async () => {
    console.log("TODO: Archiving note", note.id)
    // await archiveNote(note.id)
  }

  const handleDelete = async () => {
    await deleteNote(note.id)
  }

  const baseStyles =
    "bg-foreground/20 flex justify-around gap-1 opacity-0 group-hover:opacity-100"
  const classes = twMerge(baseStyles, alwaysShow && "opacity-100")

  return (
    <div className={classes}>
      {includeSubmitButton && (
        <Button type="submit" variant="icon">
          <SaveIcon className="h-4 w-4" />
        </Button>
      )}
      <Button variant="icon" aria-label="Add note" onClick={handleAdd}>
        <PlusIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="icon"
        aria-label="Delete note"
        onClick={handleSetBackground}
      >
        <Palette className="h-4 w-4" />
      </Button>
      <Button variant="icon" aria-label="Archive note" onClick={handleArchive}>
        <ArchiveIcon className="h-4 w-4" />
      </Button>
      <Button variant="icon" aria-label="Delete note" onClick={handleDelete}>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
