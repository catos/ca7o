"use client"

import useForm from "@/lib/use-form"
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

type FormType = typeof initialValues

export default function CreateForm() {
  const { status, mutate } = useNote()

  const { register, handleSubmit, reset, values } = useForm<FormType>({
    initialValues,
    onSubmit: (values: FormType) => {
      const formData = new FormData()
      formData.set("content", values.content)
      mutate(formData)
      // TODO: check if mutation was successful first
      reset()
    },
  })

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (values.content) {
      handleSubmit(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Textarea
        {...register("content")}
        placeholder={
          status !== "pending" ? "Just start typing!" : "Creating note..."
        }
        dynamicHeight={{ initial: 32, clampAt: 200 }}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="px-3 py-2 text-base/normal placeholder:text-center"
      />
      <Button
        variant="icon"
        type="submit"
        disabled={status === "pending"}
        className="absolute top-[6px] right-2 h-7 w-7 p-1"
      >
        {status !== "pending" ? (
          <PlusIcon className="h-4 w-4" />
        ) : (
          <LoaderCircleIcon className="w-4 animate-spin ease-in-out" />
        )}
      </Button>
    </form>
  )
}
