"use client"

import Icon from "@/components/icon"
import { signIn, signOut, useSession } from "next-auth/react"

import Link from "@/components/ui/link"

import { Button } from "./ui/button"

export default function SigninButton() {
  const { data: session, status } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  const handleSignIn = () => {
    signIn()
  }

  if (status === "loading") return <Button>...</Button>

  if (status === "authenticated") {
    return (
      <div className="flex gap-4 items-center">
        <span>{session.user.name}</span>
        <Link className="no-underline" href="/admin">
          <Icon name="cog" />
        </Link>
        <Button variant="outline" lollor="destructive" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    )
  }

  return <Button onClick={handleSignIn}>Sign in</Button>
}
