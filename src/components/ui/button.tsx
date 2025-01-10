"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  variant?: "destructive" | "icon" | "filled" | "outlined"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

// TODO: variant="destructive"
// TODO: size="icon"
export function Button({ className, children, ...rest }: Props) {
  const classes = twMerge("flex", className)

  return (
    <button className={classes} {...rest}>
      {"TODO: implement button!!!"}: {children}
    </button>
  )
}
