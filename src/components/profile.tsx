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
import { type User } from "@supabase/supabase-js"

function useCloseOnPathChange() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return { open, setOpen }
}

export default function Profile({ user }: { user: User | null }) {
  const { open, setOpen } = useCloseOnPathChange()

  // TODO: load these values from profile
  const name = user?.email ?? "N A"
  const avatar =
    "https://volslymfkdeblzqdnfkp.supabase.co/storage/v1/object/public/avatars/ed5e39dc-409e-4671-91fc-8d86ac626e2b-0.21225383379750484.png"

  // TODO: WTB full width popover on mobile
  if (Boolean(user)) {
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

            <form
              className="p-2 flex gap-2 items-center"
              action="/auth/signout"
              method="post"
            >
              <LogOutIcon />
              <Button variant="link" type="submit" className="px-0 text-base">
                Logg ut
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Link
      className="text-foreground hover:text-foreground/80 no-underline font-semibold px-3 py-2"
      href="/login"
    >
      Logg inn
    </Link>
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
