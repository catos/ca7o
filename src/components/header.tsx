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
  console.log(user)

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
          <Link href="/profile">
            <Avatar
              fallback={getInitials(name)}
              src={user?.user_metadata.avatar_url}
              className="w-8 h-8 hover:ring-2 ring-primary"
            />
          </Link>
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
