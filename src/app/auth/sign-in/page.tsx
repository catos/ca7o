"use client"

import { signIn } from "next-auth/react"
import { useRef } from "react"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function SignIn() {
  // TODO: this is bleh!
  const email = useRef("")
  const password = useRef("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/", // TODO: fetch from query param
    })
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4 p-4 mb-4"
      >
        <Input
          required
          id="email"
          type="email"
          name="email"
          label="Email"
          onChange={(e) => (email.current = e.target.value)}
        />

        <Input
          required
          id="password"
          type="password"
          name="password"
          label="Password"
          onChange={(e) => (password.current = e.target.value)}
        />

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}
