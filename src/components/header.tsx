import Profile from "@/components/profile"
import React, { ReactNode } from "react"

import Link from "@/components/ui/link"

import Logo from "./logo"

export default function Header() {
  return (
    <nav className="bg-background border-b border-primary-300">
      <div className="px-4 container mx-auto flex items-center justify-between flex-wrap gap-2 h-16">
        <Link className=" hover:bg-primary/5 p-2 mr-1 rounded-full" href="/">
          <Logo />
        </Link>

        <div className="flex text-base gap-2 items-center">
          <HeaderLink href="/recipes">Oppskrifter</HeaderLink>
          <HeaderLink href="/about">Om oss</HeaderLink>
        </div>

        <div className="flex gap-4 ml-auto">
          <Profile />
        </div>
      </div>
    </nav>
  )
}

// TODO: add active state - https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="no-underline font-semibold px-3 py-2" href={href}>
      {children}
    </Link>
  )
}
