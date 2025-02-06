import { getNotes } from "@/data/note-actions"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

// TODO: move TODO-components to components-folder
export default async function Todos() {
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
        <div className="py-4 text-xl text-center">
          No TODOs... TODO: start creating some!
        </div>
      </>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-4 rounded-md">
        {/* <CreateForm /> */}
        <h2>TODOs</h2>
        <div className="flex flex-col gap-2">
          {notes.map((note) => (
            // <TodoItem key={todo.id} todo={todo} nextState={1} />
            <div key={note.id}>{note.content}</div>
          ))}
        </div>
        {/* <div className="flex flex-col gap-2">
          {todones?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div> */}
      </div>
    </div>
  )
}
