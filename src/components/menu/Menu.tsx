"use client"

import { User } from "@supabase/supabase-js"
import { LogOutIcon, MenuIcon, XIcon } from "lucide-react"
import { Popover } from "radix-ui"
import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Link as UILink } from "@/components/ui/link"
import { Button } from "../ui/button"
import styles from "./Menu.module.css"

export function Menu({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false)

  // TODO: temporary solution
  const avatarUrl: string = user?.user_metadata?.avatar_url ?? ""
  const initials: string = (
    user?.email?.split("@")[0].slice(0, 2) ?? "NA"
  ).toUpperCase()

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className={styles.trigger}>
        {open ? <XIcon /> : <MenuIcon />}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.content}>
          <div>
            <Link href="/profile" className={styles.userInfo}>
              <Avatar
                fallback={initials}
                src={avatarUrl}
                className={styles.avatar}
              />

              <span className={styles.fullName}>
                {user?.user_metadata?.full_name}
              </span>

              {user?.email && (
                <span className={styles.email}>{user.email}</span>
              )}
            </Link>
          </div>

          <section className={styles.links}>
            <Link href="/recipes/favorites">Mine oppskrifter</Link>
            <Link href="/notes">Notater</Link>
            <Link href="/wesketch">Wesketch</Link>
            <Link href="/ui">UI components</Link>
          </section>

          <form action="/auth/signout" method="post">
            <Button
              variant="outlined"
              type="submit"
              className={styles.logoutButton}
            >
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
