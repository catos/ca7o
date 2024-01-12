"use client"

import { getInitials } from "@/lib/get-initials"
import { Settings as SettingsIcon } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
        <Avatar className="w-8 h-8">
          <AvatarImage src={session.user.avatar} />
          <AvatarFallback>{getInitials(session.user.name)}</AvatarFallback>
        </Avatar>

        <Link className="no-underline" href="/admin">
          <SettingsIcon />
        </Link>
        <Button variant="outline" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    )
  }

  return <Button onClick={handleSignIn}>Sign in</Button>
}
