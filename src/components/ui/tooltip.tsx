"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

export function Tooltip({ className, children }: Props) {
  const classes = twMerge("flex", className)

  return (
    <div className={classes}>
      {"TODO: implement tooltip!!!"}: {children}
    </div>
  )
}
