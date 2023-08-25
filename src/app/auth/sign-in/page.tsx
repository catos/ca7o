"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get("email")
    const password = formData.get("password")

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: callbackUrl ?? "/",
    })
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4 p-4 mb-4"
      >
        <Input required id="email" type="email" name="email" label="Email" />

        <Input
          required
          id="password"
          type="password"
          name="password"
          label="Password"
        />

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}
