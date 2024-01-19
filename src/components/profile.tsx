"use client"

import { getInitials } from "@/lib/get-initials"
import {
  BookIcon,
  CheckIcon,
  FlaskConicalIcon,
  LogOutIcon,
  SettingsIcon,
  StarIcon,
} from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "@/components/ui/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function useCloseOnPathChange() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return { open, setOpen }
}

export default function Profile() {
  const { open, setOpen } = useCloseOnPathChange()
  const { data: session, status } = useSession()

  const handleSignIn = () => {
    signIn()
  }

  const { avatar, name, email } = session?.user ?? { avatar: "", name: "A A" }

  // TODO: WTB full width popover on mobile
  if (status === "authenticated") {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Avatar className="w-8 h-8 hover:ring-2 ring-primary">
            <AvatarImage src={avatar} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="mx-4">
          <div className="w-full flex flex-col gap-2">
            <NavLink href="/profile">
              <Avatar className="w-8 h-8">
                <AvatarImage src={avatar} />
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
              </Avatar>
              <span className="text-lg font-semibold">Profil</span>
            </NavLink>

            <NavLink href="/favorites">
              <StarIcon />
              <span>Favoritter</span>
            </NavLink>

            <NavLink href="/menus">
              <BookIcon />
              <span className="line-through">Menyer</span>
            </NavLink>

            <NavLink href="/todos">
              <CheckIcon />
              <span>Todos</span>
            </NavLink>

            <NavLink href="/admin">
              <SettingsIcon />
              <span>Admin</span>
            </NavLink>

            <NavLink href="/test">
              <FlaskConicalIcon />
              <span>Test</span>
            </NavLink>

            <hr className="border-primary-300" />

            <NavLink
              href="/"
              onClick={(_) => {
                signOut({ callbackUrl: "/" })
              }}
            >
              <LogOutIcon />
              <span>Logg ut</span>
            </NavLink>
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Button
      variant="link"
      className="text-base font-semibold"
      onClick={handleSignIn}
    >
      Logg inn
    </Button>
  )
}

function NavLink(
  props: LinkProps & React.LinkHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <Link
      className="p-2 no-underline hover:underline flex gap-2 items-center"
      {...props}
    />
  )
}
