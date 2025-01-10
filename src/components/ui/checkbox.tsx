"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Checkbox({ className }: Props) {
  const classes = twMerge("flex items-center justify-center", className)

  return <input type="checkbox" className={classes} />
}
