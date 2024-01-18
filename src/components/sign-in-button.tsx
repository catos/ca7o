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
          <div className="flex flex-col gap-2">
            <div className="text-foreground opacity-50">Logget inn som</div>
            <Heading as="h3">{name}</Heading>

            <hr className="w-full my-2" />

            <div className="flex-1 flex flex-col gap-2">
              <Link
                className="p-2 no-underline hover:bg-primary/10"
                href="/profile"
              >
                Profile
              </Link>

              <Link
                className="p-2 no-underline hover:bg-primary/10"
                href="/admin"
              >
                Admin
              </Link>

              <Link
                className="p-2 no-underline hover:bg-primary/10"
                href="/sign-out"
              >
                Logg ut
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  // TODO: Replace this with avatar or something else when we have it working properly ...
  return <Button onClick={handleSignIn}>Sign in</Button>
}
