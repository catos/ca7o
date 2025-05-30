"use client"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from "@headlessui/react"
import { User } from "@supabase/supabase-js"
import { LogOutIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { Avatar } from "@/components/ui/avatar"
import { Link as UILink } from "@/components/ui/link"
import { Button } from "./ui/button"

export function ProfilePopover({ user }: { user: User | null }) {
  // TODO: temporary solution
  const avatarUrl: string = user?.user_metadata?.avatar_url ?? ""
  const initials: string = (
    user?.email?.split("@")[0].slice(0, 2) ?? "NA"
  ).toUpperCase()

  const classes = twMerge(
    "border-border/40 bg-blur flex w-96 flex-col gap-2 rounded-lg border p-4 [--anchor-gap:32px]",
    "transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
  )

  return (
    <Popover className="group">
      <PopoverButton className="flex items-center gap-2">
        <Avatar fallback={initials} src={avatarUrl} />
      </PopoverButton>
      <PopoverPanel transition anchor="bottom end" className={classes}>
        <Link href="/profile">Profile</Link>
        <Link href="/my-recipes">My recipes</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/wesketch">Wesketch</Link>
        <Link href="/dev">Dev</Link>

        <form
          className="flex items-center gap-2 p-2"
          action="/auth/signout"
          method="post"
        >
          <Button variant="outlined" type="submit" className="w-full">
            <LogOutIcon />
            Logg ut
          </Button>
        </form>
      </PopoverPanel>
    </Popover>
  )
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  let close = useClose()

  return (
    <UILink
      href={href}
      onClick={() => {
        close()
      }}
      className="hover:bg-accent-foreground/10 rounded-lg p-4 font-semibold no-underline hover:underline"
    >
      {children}
    </UILink>
  )
}
