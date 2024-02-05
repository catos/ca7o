"use client"

import { useDebounce } from "@/lib/use-debounce"
import useForm from "@/lib/use-form"
import { Todo } from "@prisma/client"
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
  // TODO: review/refactor, not sure how though
  const saveChanges = useDebounce(() => {
    const formData = new FormData()
    formData.set("id", todo.id.toString())
    formData.set("title", values.title)
    formData.set("content", values.content)
    formData.set("state", todo.state.toString())

    if (values.title !== todo.title || values.content !== todo.content) {
      updateTodo(formData)
    }
  })

  const { values, register, handleSubmit } = useForm({
    initialValues: {
      title: todo.title ?? "",
      content: todo.content ?? "",
    },
    onSubmit: () => {
      saveChanges()
    },
    onChange: () => {
      saveChanges()
    },
  })

  const isDone = todo.state > 0

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      saveChanges()
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger
        className={twMerge(
          "p-1 text-left cursor-pointer hover:bg-slate-100",
          isDone && "line-through text-gray-500"
        )}
      >
        {todo.title}
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <form className="flex flex-col gap-2 h-96" onSubmit={handleSubmit}>
          <div className="flex-1 flex flex-col">
            <Input
              className="bg-transparent border-none font-semibold text-xl"
              {...register("title")}
            />
            <Textarea
              className="bg-transparent border-none flex-1 h-full"
              {...register("content")}
              placeholder="Add content here (optional)"
            />
          </div>
          <div className="flex justify-end text-sm text-foreground/50">
            Sist oppdatert: {todo.updatedAt.toLocaleString("no-NO")}
          </div>
          <div className="mt-4 flex gap-4">
            {/* TODO: naming!!! what to call all this, and the files ... */}
            <UpdateState todo={todo} value={nextState} />
            <DeleteForm todo={todo} />
            <div className="flex-1 text-right">
              <Button type="submit">Large</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
