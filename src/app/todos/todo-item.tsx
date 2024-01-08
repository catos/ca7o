"use client"

import useForm from "@/lib/use-form"
import useOutsideClick from "@/lib/use-outside-click"
import { Todo } from "@prisma/client"
import { SyntheticEvent, useState } from "react"
import { twMerge } from "tailwind-merge"

import { updateTodo } from "@/data/todo-actions"

import Button from "@/components/ui/button"

import DeleteForm from "./delete-form"
import UpdateState from "./update-state"

type Props = {
  todo: Todo
  nextState?: number
}

export default function TodoItem({ todo, nextState = 0 }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsEditing(false)
    saveChanges()
  })

  const { values, handleSubmit, handleChange } = useForm({
    initialValues: {
      title: todo.title ?? "",
      content: todo.content ?? "",
    },
    onSubmit: () => {
      saveChanges()
      setIsEditing(false)
    },
  })

  const isDone = todo.state > 0
  const showContent = (todo.content || isEditing) && !isDone

  const saveChanges = () => {
    const formData = new FormData()
    formData.set("id", todo.id.toString())
    formData.set("title", values.title)
    formData.set("content", values.content)
    formData.set("state", todo.state.toString())

    if (values.title !== todo.title || values.content !== todo.content) {
      updateTodo(formData)
    }
  }

  const handleFocus = (e: SyntheticEvent) => {
    setIsEditing(true)
  }

  return (
    <form
      className={twMerge(
        "border rounded-md p-4 flex flex-col md:flex-row gap-2 bg-white",
        isEditing && "border-primary-900 "
      )}
      onSubmit={handleSubmit}
    >
      <div ref={ref} className="flex-1 flex flex-col justify-center gap-1">
        <input
          className={twMerge(
            "bg-transparent font-semibold",
            isEditing && "border border-primary-900 rounded-md py-1 px-2",
            isDone && "line-through text-gray-500"
          )}
          name="title"
          type="text"
          value={values.title ?? ""}
          onChange={handleChange}
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
            onFocus={handleFocus}
            value={values.content ?? ""}
            placeholder="Add content here (optional)"
          />
        )}
        {isEditing && <Button type="submit">Save</Button>}
      </div>

      <div className="flex-none flex gap-1 w-[52px]">
        {/* TODO: naming!!! what to call all this, and the files ... */}
        <UpdateState todo={todo} value={nextState} />
        <DeleteForm todo={todo} />
      </div>
    </form>
  )
}
