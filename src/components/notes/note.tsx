"use client"

import useForm from "@/lib/use-form"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react"
import { updateNote } from "@/data/note-actions"
import { Textarea } from "../ui/textarea"
import { NoteOptions } from "./NoteOptions"
import { NotePreview } from "./NotePreview"
import { NoteWithChildren } from "./types"

type Props = {
  note: NoteWithChildren
}

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
                className="h-full w-full resize-none p-4 outline-none"
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
