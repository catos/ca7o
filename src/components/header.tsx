import { createClient } from "@/utils/supabase/server"
import React, { ReactNode } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Link } from "@/components/ui/link"
import { SearchInput } from "@/components/search-input"
import Logo from "./logo"

export default async function Header() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // TODO: temporary solution
  const avatarUrl: string = user?.user_metadata?.avatar_url ?? ""
  const initials: string = (
    user?.email?.split("@")[0].slice(0, 2) ?? "NA"
  ).toUpperCase()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <nav className="m-auto flex max-w-6xl items-center gap-4 px-6 py-2 text-sm font-semibold">
        <Link className="hover:bg-primary/5 p-2 mr-1 rounded-full" href="/">
          <Logo />
        </Link>

        <div className="w-full">
          <SearchInput />
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-4">
          <HeaderLink href="/recipes">Recipes</HeaderLink>

          {user ? (
            <Link href="/profile">
              <Avatar fallback={initials} src={avatarUrl} />
            </Link>
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
      className="px-2 py-4 text-sm font-semibold leading-6 no-underline hover:text-primary"
      href={href}
    >
      {children}
    </Link>
  )
}
