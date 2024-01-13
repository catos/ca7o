"use client"

import { getInitials } from "@/lib/get-initials"
import { signIn, signOut, useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function SigninButton() {
  const { data: session, status } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  const handleSignIn = () => {
    signIn()
  }

  const { avatar, name } = session?.user ?? { avatar: "", name: "A A" }

  // TODO: WTB full width popover on mobile
  if (status === "authenticated") {
    return (
      <Popover>
        <PopoverTrigger>
          <Avatar className="w-8 h-8 hover:ring-2 ring-primary">
            <AvatarImage src={avatar} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="mx-4">
          <div className="flex flex-col gap-1 items-center">
            <div>Logget inn som</div>
            <Heading as="h3">{name}</Heading>

            <Link className="flex gap-2 no-underline" href="/profile">
              Profile
            </Link>

            <Link className="flex gap-2 no-underline" href="/admin">
              Admin
            </Link>

            <Button variant="outline" onClick={handleSignOut}>
              Logg ut
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  // TODO: Replace this with avatar or something else when we have it working properly ...
  return <Button onClick={handleSignIn}>Sign in</Button>
}
