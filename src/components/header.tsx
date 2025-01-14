import { Avatar } from "@/components/ui/avatar"
import React, { ReactNode } from "react"

import { Link } from "@/components/ui/link"

import Logo from "./logo"
import { createClient } from "@/utils/supabase/server"
import { getInitials } from "@/lib/get-initials"

export default async function Header() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // TODO: temporary solution
  const name = user?.email ?? "N A"
  const avatar =
    "https://volslymfkdeblzqdnfkp.supabase.co/storage/v1/object/public/avatars/ed5e39dc-409e-4671-91fc-8d86ac626e2b-0.21225383379750484.png"

  return (
    <nav className="bg-background border-b border-primary-300">
      <div className="px-4 container mx-auto flex items-center justify-between flex-wrap gap-2 h-16">
        <Link className="hover:bg-primary/5 p-2 mr-1 rounded-full" href="/">
          <Logo />
        </Link>

        <div className="flex text-base gap-2 items-center">
          <HeaderLink href="/recipes">Oppskrifter</HeaderLink>
          <HeaderLink href="/about">Om oss</HeaderLink>
        </div>

        <div className="flex gap-4 ml-auto">
          {/* <Profile user={user} /> */}
          <Avatar
            fallback={getInitials(name)}
            src={avatar}
            className="w-8 h-8 hover:ring-2 ring-primary"
          />
        </div>
      </div>
    </nav>
  )
}

// TODO: add active state - https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="no-underline text-foreground hover:text-foreground/80 font-semibold px-3 py-2"
      href={href}
    >
      {children}
    </Link>
  )
}
