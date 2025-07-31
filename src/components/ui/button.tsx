"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  variant?: "filled" | "outlined" | "link" | "icon" | "destructive"
  size?: "base" | "sm" | "lg"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "filled",
  size = "base",
  className,
  ...rest
}: Props) {
  const baseStyles =
    "inline-flex grow-0 gap-1.5 items-center justify-center rounded-md cursor-pointer whitespace-nowrap"

  const variantStyles = {
    filled: "bg-primary text-primary-foreground hover:bg-primary/90",
    outlined:
      "border-primary hover:bg-accent hover:text-accent-foreground border-2",
    icon: "cursor-pointer hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full",
    link: "hover:bg-accent underline underline-offset-4",
    destructive: "bg-destructive hover:bg-destructive/90",
  }

  const sizeStyles = {
    base: "px-4 py-2 text-sm has-[>svg]:px-3",
    sm: "px-3 py-1.5 text-xs has-[>svg]:px-2.5",
    lg: "px-5 py-3 text-base has-[>svg]:px-4",
  }

  const classes = twMerge(
    variant !== "icon" && baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
