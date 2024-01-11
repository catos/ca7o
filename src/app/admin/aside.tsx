"use client"

import Icon from "@/components/icon"
import { useState } from "react"
import { twJoin } from "tailwind-merge"

import { Button } from "@/components/ui/button"
import Link from "@/components/ui/link"
import List from "@/components/ui/list"
import ListItem from "@/components/ui/list-item"

const asideData = [
  {
    title: "Home",
    href: "/admin",
    icon: "home",
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: "users",
  },
  {
    title: "Recipes",
    href: "/admin/recipes",
    icon: "document",
  },
]

export default function Aside() {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="relative h-screen p-2 border-r">
      <Button
        className="flex items-center gap-2 p-2 no-underline"
        onClick={() => setExpanded(!expanded)}
      >
        <Icon
          className="font-bold"
          name={expanded ? "chevronDoubleLeft" : "chevronDoubleRight"}
        />
        {expanded && <span className="font-bold">Admin</span>}
      </Button>

      <List className={twJoin("pl-0 list-none", expanded && "md:w-48")}>
        {asideData.map(({ title, href, icon }) => (
          <ListItem key={href} className="p-0">
            <Link
              className="flex items-center gap-2 p-2 no-underline"
              href={href}
            >
              <Icon className="" name={icon} />
              {expanded && <span>{title}</span>}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
