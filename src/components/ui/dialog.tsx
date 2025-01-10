"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

export function Dialog({ className, children }: Props) {
  const classes = twMerge("flex items-center justify-center", className)

  return (
    <div className={classes}>
      {"TODO: implement dialog!!!"}: {children}
    </div>
  )
}
