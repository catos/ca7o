import { Tables } from "@/types/database"
import styles from "./styles.module.css"

export type NoteWithChildren = Tables<"notes"> & {
  children: NoteWithChildren[]
}

type Props = {
  note: NoteWithChildren
}

/**
 * CSS Modules vs Tailwind CSS
 *
 * Cons of CSS Modules:
 *
 * - no intellisense on styles.
 * - no easy access to theme from ***.module.css
 * - conditional styles would have to be if-statements in component including one of multiple classes from .module.css
 *
 * Pros of CSS Modules:
 *
 * - scoped styles, no conflicts with other components
 * - native CSS, learn actual web development skills
 *
 *
 *
 */

export function Note({ note }: Props) {
  return (
    <div className="bg-primary/40 border-primary flex flex-col gap-2 rounded-md border p-4">
      <div>{note.content}</div>
      {note.children?.length > 0 && (
        <div>
          {note.children.map((child) => (
            <ChildNote key={child.id} note={child} />
          ))}
        </div>
      )}
    </div>
  )
}

function ChildNote({ note }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-white/10 p-4">
      <div>{note.content}</div>
    </div>
  )
}
