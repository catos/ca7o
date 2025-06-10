import { Tables } from "@/types/database"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { getNotes } from "@/data/note-actions"
import { Note, NoteWithChildren } from "@/components/notes/note"
import CreateForm from "./create-form"

export default async function Notes() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) {
    redirect("/login")
  }

  const notes = await getNotes(user.id)
  if (!notes || notes.length === 0) {
    return (
      <>
        {/* <CreateForm /> */}
        <div className="py-4 text-center text-xl">
          No notes... TODO: start creating some!
        </div>
      </>
    )
  }

  function buildNoteTree(note: Tables<"notes">): NoteWithChildren {
    return {
      ...note,
      children: notes
        .filter((child) => child.parent_id === note.id)
        .map(buildNoteTree),
    }
  }

  const rootNotes: NoteWithChildren[] = notes
    .filter((note) => !note.parent_id)
    .map(buildNoteTree)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-md p-4">
        <CreateForm />
        <h2>Notes</h2>
        <div className="flex flex-col gap-2">
          {rootNotes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
        {/* <div className="flex flex-col gap-2">
          {todones?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div> */}
      </div>
    </div>
  )
}
