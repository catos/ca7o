"use client"

import useForm from "@/lib/use-form"
import { Tables } from "@/types/database"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react"
import { updateNote } from "@/data/note-actions"
import { Markdown } from "../recipe/markdown"
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

type FormType = {
  content: string
}

/**
 * TODO:
 * - [ ] Update note while typing (throttled)
 * - [ ] Add note options (delete, archive, etc.)
 * - [ ] Add close-dialog-callback-function to options, or maybe find a better way to implement this
 * - [ ] Add note background color options
 * - [ ] Add support for nested notes (children)
 * - [ ] Move Dialog, DialogBackdrop, DialogPanel to UI-folder
 * - [ ] Optimistic delete and update
 * @param param0
 * @returns
 */
export function Note({ note }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const { register, handleSubmit } = useForm<FormType>({
    initialValues: note,
    onSubmit: (values: FormType) => {
      const formData = new FormData()
      formData.set("id", note.id)
      formData.set("content", values.content)
      updateNote(formData)
    },
  })

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <>
      <NotePreview note={note} onClick={openDialog} />
      <Dialog open={isOpen} onClose={closeDialog} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="border-primary bg-blur bg-primary/40 w-lg rounded-md border shadow-lg">
            <form onSubmit={handleSubmit}>
              <Textarea
                className="h-full w-full resize-none p-4"
                {...register("content")}
                autoFocus
                rows={16}
              />
              <NoteOptions note={note} includeSubmitButton alwaysShow />
            </form>
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
    <div className="group bg-primary/40 hover:bg-primary/50 border-primary relative flex flex-col justify-between overflow-auto rounded-md border">
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
