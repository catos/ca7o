"use client"

import { useState } from "react"

import { createTodo } from "@/data/todo-actions"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"

// TODO: type all return values
type Status = "idle" | "pending" | "success" | "error"
// TODO: create useQuery hook ?
function useTodo() {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string | undefined>()

  const mutate = async (formData: FormData) => {
    setStatus("pending")
    try {
      await createTodo(formData)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    mutate(formData)
  }

  if (expanded) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input id="title" name="title" type="text" placeholder="Title" />
        <Textarea
          id="content"
          name="content"
          placeholder="Content (optional)"
        />
        <Button type="submit" disabled={status === "pending"}>
          Create
        </Button>

        {message && <div>TODO: style me properly please - {message}</div>}
      </form>
    )
  }

  return <Button onClick={() => setExpanded(true)}>Create</Button>
}
