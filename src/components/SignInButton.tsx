"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import Button from "./ui/Button"

export default function SigninButton() {
  const { data: session } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  const handleSignIn = () => {
    signIn()
  }

  if (session && session.user) {
    return (
      <>
        <span className="mr-2">{session.user.name}</span>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </>
    )
  }
  return <Button onClick={handleSignIn}>Sign In</Button>
}
