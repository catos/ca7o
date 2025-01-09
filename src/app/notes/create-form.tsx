"use client"

import useForm from "@/lib/use-form"
import useOutsideClick from "@/lib/use-outside-click"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

// import { createTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"

// TODO: type all return values
type Status = "idle" | "pending" | "success" | "error"
// TODO: create useQuery hook from this ?
function useTodo() {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string | undefined>()

  const mutate = async (formData: FormData) => {
    setStatus("pending")
    try {
      //   await createTodo(formData)
      setMessage(message)
      setStatus("success")
    } catch (error) {
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

export default function CreateForm() {
  const [expanded, setExpanded] = useState(false)
  const { status, message, mutate } = useTodo()
  const ref = useOutsideClick<HTMLFormElement>(() => setExpanded(false))
  const { register, handleSubmit, reset } = useForm({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values: any) => {
      setExpanded(false)
      const formData = new FormData()
      formData.set("title", values.title)
      formData.set("content", values.content)
      mutate(formData)
      // TODO: check if mutation was successful first
      reset()
    },
  })

  const handleFocus = () => {
    setExpanded(true)
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        {...register("title")}
        placeholder="Start typing your TODO here..."
        className={twMerge(
          !expanded && "border-2 border-primary-400 rounded-md"
        )}
        onFocus={handleFocus}
      />

      {expanded && (
        <>
          <Textarea
            {...register("content")}
            placeholder="Add some content if you like"
          />
          <Button type="submit" disabled={status === "pending"}>
            Create
          </Button>
          {message && <div>TODO: style me properly please - {message}</div>}
        </>
      )}
    </form>
  )
}
