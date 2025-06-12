import { ArchiveIcon, Palette, PlusIcon, TrashIcon } from "lucide-react"
import { createNote, deleteNote } from "@/data/note-actions"
import { Button } from "../ui/button"
import { NoteWithChildren } from "./note"

type Props = {
  note: NoteWithChildren
}

export function NoteOptions({ note }: Props) {
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

  return (
    <div className="bg-primary/20 flex justify-around gap-1 opacity-0 group-hover:opacity-100">
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
