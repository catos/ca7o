"use client"

import { Button as HeadlessButton } from "@headlessui/react"
import { twMerge } from "tailwind-merge"

type Props = {
  variant?: "filled" | "outlined" | "link" | "icon" | "destructive"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "filled",
  color = "primary",
  className,
  ...rest
}: Props) {
  const base =
    "flex gap-2 items-center justify-center rounded-md px-4 py-3 text-sm"

  const variants = {
    filled: "bg-primary text-primary-foreground hover:bg-primary/90",
    outlined:
      "border-primary hover:bg-accent hover:text-accent-foreground border-2",
    icon: "hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full",
    link: "hover:bg-accent underline underline-offset-4",
    destructive: "bg-destructive hover:bg-destructive/90",
  }

  const classes = twMerge(
    variant !== "icon" && base,
    variants[variant],
    className
  )

  return (
    <HeadlessButton className={classes} {...rest}>
      {children}
    </HeadlessButton>
  )
}
