"use client"

import useForm from "@/lib/use-form"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

type FormType = {
  name: string
  email: string
}

export default function TestForm() {
  const { register, handleSubmit } = useForm<FormType>({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("submitted", values)
    },
    onChange: () => {
      console.log("changed")
    },
  })

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input label="Name" {...register("name")} />
      <Input label="Email" {...register("email")} type="email" />

      <Button type="submit">Submit</Button>
    </form>
  )
}
