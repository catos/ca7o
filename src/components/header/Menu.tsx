"use client"

import { User } from "@supabase/supabase-js"
import { LogOutIcon, MenuIcon, XIcon } from "lucide-react"
import { Popover } from "radix-ui"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Avatar } from "@/components/ui/avatar"
import { Link as UILink } from "@/components/ui/link"
import { Button } from "../ui/button"

export function Menu({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false)

  // TODO: temporary solution
  const avatarUrl: string = user?.user_metadata?.avatar_url ?? ""
  const initials: string = (
    user?.email?.split("@")[0].slice(0, 2) ?? "NA"
  ).toUpperCase()

  const contentAnimationStyles =
    "will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"

  const contentStyles = twMerge(
    "border border-border rounded bg-blur m-4 mt-8 flex w-[calc(100vw-2rem)] flex-col gap-4 p-8 md:max-w-lg",
    contentAnimationStyles
  )

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className="cursor-pointer">
        {open ? <XIcon /> : <MenuIcon />}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={contentStyles}>
          <div>
            <Link
              href="/profile"
              className="flex flex-col items-center gap-1 no-underline"
            >
              <Avatar
                fallback={initials}
                src={avatarUrl}
                className="h-16 w-16"
              />

              <span className="text-lg font-bold">
                {user?.user_metadata?.full_name}
              </span>

              {user?.email && (
                <span className="text-muted text-sm">{user.email}</span>
              )}
            </Link>
          </div>

          {/* border-border hover:text-primary border-b py-4 no-underline */}

          <section className="flex flex-col gap-1">
            <Link
              className="border-border border-b py-4 no-underline"
              href="/recipes/favorites"
            >
              Mine oppskrifter
            </Link>
            <Link
              className="border-border border-b py-4 no-underline"
              href="/notes"
            >
              Notater
            </Link>
            <Link
              className="border-border border-b py-4 no-underline"
              href="/wesketch"
            >
              Wesketch
            </Link>
            <Link className="py-4 no-underline" href="/ui">
              UI components
            </Link>
          </section>

          <form action="/auth/signout" method="post">
            <Button variant="outlined" type="submit" className="w-full">
              <LogOutIcon />
              Logg ut
            </Button>
          </form>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

type LinkProps = {
  href: string
  children: React.ReactNode
} & React.ComponentProps<typeof UILink>

function Link({ href, children, ...rest }: LinkProps) {
  return (
    <Popover.Close asChild>
      <UILink href={href} {...rest}>
        {children}
      </UILink>
    </Popover.Close>
  )
}
