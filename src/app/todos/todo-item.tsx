"use client"

import useForm from "@/lib/use-form"
import { Todo } from "@prisma/client"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { updateTodo } from "@/data/todo-actions"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"

import DeleteForm from "./delete-form"
import UpdateState from "./update-state"

type Props = {
  todo: Todo
  nextState?: number
}

export default function TodoItem({ todo, nextState = 0 }: Props) {
  let [isOpen, setIsOpen] = useState(false)

  const { values, register, handleSubmit } = useForm({
    initialValues: {
      title: todo.title ?? "",
      content: todo.content ?? "",
    },
    onSubmit: () => {
      saveChanges()
      closeModal()
    },
    onChange: () => {
      // TODO: need to throttle this
      // saveChanges()
    },
  })

  const isDone = todo.state > 0

  const closeModal = () => {
    saveChanges()
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

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

  return (
    <Dialog>
      <DialogTrigger
        className={twMerge(
          "p-1 text-left cursor-pointer hover:bg-slate-100",
          isDone && "line-through text-gray-500"
        )}
      >
        {todo.title}
      </DialogTrigger>
      <DialogContent>
        <form className="flex flex-col gap-2 h-96" onSubmit={handleSubmit}>
          <div className="flex-1 flex flex-col">
            <Input
              className="bg-transparent border-none font-semibold text-xl"
              {...register("title")}
            />
            <Textarea
              className="bg-transparent border-none flex-1"
              {...register("content")}
              placeholder="Add content here (optional)"
            />
          </div>
          <div className="flex justify-end text-sm text-primary-500">
            Sist oppdatert: {todo.updatedAt.toLocaleString("no-NO")}
          </div>
          <div className="mt-4 flex gap-4">
            {/* TODO: naming!!! what to call all this, and the files ... */}
            <UpdateState todo={todo} value={nextState} />
            <DeleteForm todo={todo} />
            <div className="flex-1 text-right">
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
