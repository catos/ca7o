"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import Button from "./ui/Button"

export default function SigninButton() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    )
  }
  return <Button onClick={() => signIn()}>Sign In</Button>
}
