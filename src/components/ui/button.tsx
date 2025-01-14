"use client"

import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  variant?: "filled" | "outlined" | "icon" | "link" | "destructive"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const VARIANTS = {
  filled: "bg-pblue text-pblue-foreground hover:bg-pblue/90",
  outlined:
    "border border-pblue bg-transparent hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-pred text-pred-foreground hover:bg-pred/90",
  icon: "hover:bg-accent hover:text-accent-foreground",
  link: "text-pblue underline-offset-4 hover:underline",
} as const

export function Button({
  children,
  variant = "filled",
  color = "primary",
  className,
  ...rest
}: Props) {
  const classes = twMerge(
    "flex px-4 py-2 rounded-md",
    VARIANTS[variant],
    className
  )

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
