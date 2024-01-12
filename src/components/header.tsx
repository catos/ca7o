import SigninButton from "@/components/sign-in-button"
import React, { ReactNode } from "react"

import Link from "@/components/ui/link"

import Logo from "./logo"

export default function Header() {
  return (
    <nav className="border-b border-primary-300">
      <div className="px-2 xl:p-0 container mx-auto flex items-center justify-between flex-wrap gap-2 h-16">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex text-base gap-2 items-center">
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/todos">Todos</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>

        <div className="flex gap-4 ml-auto">
          <SigninButton />
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="no-underline font-semibold hover:bg-primary-200 px-2 py-1 rounded inline-block"
      href={href}
    >
      {children}
    </Link>
  )
}
