"use client"

import { Tables } from "@/types/database"
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { NoteOptions } from "./NoteOptions"

// TODO: move to note.d.ts
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
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  return (
    <>
      <NotePreview note={note} onClick={openDialog} />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="border-primary bg-blur bg-primary/40 w-lg border p-4">
            <Textarea
              id="note-content"
              className="h-full w-full resize-none"
              placeholder="Write your note here..."
              value={note.content}
              onChange={(e) => {
                console.log("Content changed:", e.target.value)
              }}
              autoFocus
              rows={16}
            />

            <NoteOptions note={note} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

function NotePreview({
  note,
  onClick,
}: {
  note: NoteWithChildren
  onClick: () => void
}) {
  return (
    <div className="group bg-primary/40 hover:bg-primary/50 border-primary relative flex cursor-pointer flex-col justify-between overflow-auto rounded-md border">
      <a onClick={onClick}>
        <div className="max-h-[200px] overflow-hidden p-4">{note.content}</div>
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
      <NoteOptions note={note} />
    </div>
  )
}
