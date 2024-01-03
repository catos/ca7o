"use client"

import { Todo } from "@prisma/client"
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react"
import { twMerge } from "tailwind-merge"

import { updateTodo } from "@/data/todo-actions"

import DeleteForm from "./delete-form"
import UpdateState from "./update-state"

type Props = {
  todo: Todo
  nextState?: number
}

export default function TodoItem({ todo, nextState = 0 }: Props) {
  const [state, setState] = useState({
    title: todo.title ?? "",
    content: todo.content ?? "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const isDone = todo.state > 0
  const showContent = (todo.content || isEditing) && !isDone

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setIsEditing(true)
    setState((p) => ({
      ...p,
      [name]: value,
    }))
  }

  const saveChanges = () => {
    const formData = new FormData()
    formData.set("id", todo.id.toString())
    formData.set("title", state.title)
    formData.set("content", state.content)
    formData.set("state", todo.state.toString())

    if (state.title !== todo.title || state.content !== todo.content) {
      updateTodo(formData)
    }
  }

  const handleFocus = (e: SyntheticEvent) => {
    setIsEditing(true)
  }

  const handleBlur = (e: SyntheticEvent) => {
    saveChanges()
    setIsEditing(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveChanges()
    setIsEditing(false)
  }

  return (
    <form
      className={twMerge(
        "border rounded-md p-2 flex flex-col md:flex-row gap-2",
        isEditing && "border-primary-900 bg-primary-200"
      )}
      onSubmit={handleSubmit}
    >
      <div className="flex-1 flex flex-col justify-center gap-1">
        <input
          className={twMerge(
            "bg-transparent font-semibold",
            isEditing && "border border-primary-900 rounded-md py-1 px-2",
            isDone && "line-through text-gray-500"
          )}
          name="title"
          type="text"
          value={state.title ?? ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {showContent && (
          <textarea
            className={twMerge(
              "text-sm text-gray-500",
              isEditing && "border border-primary-900 rounded-md py-1 px-2"
            )}
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={state.content ?? ""}
            placeholder="Add content here (optional)"
          />
        )}
      </div>

      <div className="flex-none flex gap-1 w-[52px]">
        {/* TODO: naming!!! what to call all this, and the files ... */}
        <UpdateState todo={todo} value={nextState} />
        <DeleteForm todo={todo} />
      </div>
    </form>
  )
}
