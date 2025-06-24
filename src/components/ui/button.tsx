"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  variant?: "filled" | "outlined" | "link" | "icon" | "destructive"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "filled",
  className,
  ...rest
}: Props) {
  const baseStyles =
    "inline-flex gap-1.5 items-center justify-center rounded-md px-4 py-3 text-sm cursor-pointer"

  const variantStyles = {
    filled: "bg-primary text-primary-foreground hover:bg-primary/90",
    outlined:
      "border-primary hover:bg-accent hover:text-accent-foreground border-2",
    icon: "cursor-pointer hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full",
    link: "hover:bg-accent underline underline-offset-4",
    destructive: "bg-destructive hover:bg-destructive/90",
  }

  const classes = twMerge(
    variant !== "icon" && baseStyles,
    variantStyles[variant],
    className
  )

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
