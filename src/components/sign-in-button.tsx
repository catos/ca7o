"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import Button from "@/components/ui/button"

import Link from "./ui/link"

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
        <Link className="mr-2 no-underline" href="/admin">
          Admin
        </Link>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </>
    )
  }
  return <Button onClick={handleSignIn}>Sign In</Button>
}
