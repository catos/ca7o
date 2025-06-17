import type { NoteWithChildren } from "@/components/notes/types"
import { Markdown } from "@/components/recipe/markdown"
import { NoteOptions } from "./NoteOptions"

export function NotePreview({
  note,
  onClick,
}: {
  note: NoteWithChildren
  onClick: () => void
}) {
  return (
    <div className="group bg-accent border-border hover:bg-foreground/15 relative flex flex-col justify-between overflow-auto rounded-md border">
      <div>
        <a onClick={onClick} className="cursor-pointer">
          <div className="max-h-[200px] overflow-hidden p-4">
            <Markdown>{note.content}</Markdown>
          </div>
        </a>
        {note.children?.length > 0 && (
          <div className="m-4">
            {note.children.map((child) => (
              <div
                key={child.id}
                className="flex flex-col gap-2 rounded-md bg-white/10 p-4"
              >
                <div>{child.content.substring(0, 24)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NoteOptions note={note} />
    </div>
  )
}
