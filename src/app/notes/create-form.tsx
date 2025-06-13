"use client"

import useForm from "@/lib/use-form"
import useOutsideClick from "@/lib/use-outside-click"
import { LoaderCircleIcon, PlusIcon } from "lucide-react"
import { useState } from "react"
import { createNote } from "@/data/note-actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// TODO: type all return values
type Status = "idle" | "pending" | "success" | "error"

// TODO: create useQuery hook from this ?
function useNote() {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string | undefined>()

  const mutate = async (formData: FormData) => {
    setStatus("pending")
    try {
      await createNote(formData)
      setMessage(message)
      setStatus("success")
    } catch (error) {
      console.error("Error creating todo:", error)
      setStatus("error")

      let message = "Something went wrong"
      if (error instanceof Error) {
        message = error.message
      }
      setMessage(message)
    }
  }

  return {
    status,
    message,
    mutate,
  }
}

const initialValues = {
  content: "",
  state: 1,
}

export default function CreateForm() {
  const [expanded, setExpanded] = useState(false)
  const { status, message, mutate } = useNote()
  const ref = useOutsideClick<HTMLFormElement>(() => setExpanded(false))
  const { register, handleSubmit, reset, values } = useForm<
    typeof initialValues
  >({
    initialValues,
    onSubmit: (values: any) => {
      setExpanded(false)
      const formData = new FormData()
      formData.set("content", values.content)
      mutate(formData)
      // TODO: check if mutation was successful first
      reset()
    },
  })

  const handleFocus = () => {
    setExpanded(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // If the textarea is empty, collapse it
    if (register("content").value.toString().trim().length === 0) {
      setExpanded(false)
    }

    if (values.content) {
      handleSubmit(e)
    }
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className="relative">
      <Textarea
        {...register("content")}
        placeholder="Add some content if you like"
        rows={expanded ? 3 : 2}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="placeholder:pt-2 placeholder:text-center placeholder:text-lg"
      />
      <Button
        variant="icon"
        type="submit"
        disabled={status === "pending"}
        className="absolute top-2 right-2"
      >
        {status !== "pending" ? (
          <PlusIcon className="h-5 w-5" />
        ) : (
          <LoaderCircleIcon className="w-5" />
        )}
      </Button>
    </form>
  )
}
