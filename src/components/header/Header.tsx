import { createClient } from "@/utils/supabase/server"
import React, { ReactNode } from "react"
import { Link } from "@/components/ui/link"
import { SearchInput } from "@/components/search-input"
import Logo from "../logo"
import { Menu } from "./menu"

export default async function Header() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="border-border/40 bg-blur sticky top-0 z-50 w-full border-b">
      <nav className="m-auto flex max-w-6xl items-center gap-4 px-6 py-2 text-sm font-semibold">
        <Link className="hover:bg-primary/5 rounded-full p-2" href="/">
          <Logo />
        </Link>

        <div className="w-full">
          <SearchInput />
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-4">
          <HeaderLink href="/recipes">Recipes</HeaderLink>

          {user ? (
            <Menu user={user} />
          ) : (
            <HeaderLink href="/login">Login</HeaderLink>
          )}
        </div>
      </nav>
    </header>
  )
}

// TODO: add active state - https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="px-2 py-4 text-sm leading-6 font-semibold no-underline"
      href={href}
    >
      {children}
    </Link>
  )
}
