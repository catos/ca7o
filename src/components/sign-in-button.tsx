"use client"

import Icon from "@/components/icon"
import { signIn, signOut, useSession } from "next-auth/react"

import Button from "@/components/ui/button"
import Link from "@/components/ui/link"

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
        <Link className="no-underline" href="/admin">
          <Icon name="cog" />
        </Link>
        <Button onClick={handleSignOut}>Sign out</Button>
      </div>
    )
  }

  return <Button onClick={handleSignIn}>Sign in</Button>
}
