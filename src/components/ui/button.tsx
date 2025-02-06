"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  variant?:
    | "button-filled"
    | "button-outlined"
    | "button-link"
    | "button-icon"
    | "button-destructive"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "button-filled",
  color = "primary",
  className,
  ...rest
}: Props) {
  const classes = twMerge(variant, className)

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
