"use client"

import {
  BookTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from "lucide-react"
import { useState } from "react"
import { twJoin } from "tailwind-merge"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

const asideData = [
  {
    title: "Home",
    href: "/admin",
    icon: <HomeIcon />,
  },
  {
    title: "Recipes",
    href: "/admin/recipes",
    icon: <BookTextIcon />,
  },
]

export default function Aside() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={twJoin(
        "relative h-screen p-2 border-r",
        expanded && "md:w-48"
      )}
    >
      <Button variant="icon" onClick={() => setExpanded(!expanded)}>
        {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Button>

      {asideData.map(({ title, href, icon }) => (
        <Link
          key={href}
          className="flex items-center gap-2 p-2 no-underline"
          href={href}
        >
          {icon}
          {expanded && <span>{title}</span>}
        </Link>
      ))}
    </div>
  )
}
