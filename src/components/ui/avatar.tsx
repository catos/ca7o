"use client"

/* eslint-disable @next/next/no-img-element */
import { twMerge } from "tailwind-merge"

type Props = {
  fallback: string
  src?: string
  className?: string
}

export function Avatar({ fallback, src, className }: Props) {
  const classes = twMerge(
    "flex h-8 w-8 min-w-8 items-center justify-center rounded-full bg-foreground/15",
    className
  )

  return (
    <span className={classes}>
      {src ? (
        <img src={src} alt="Avatar" className="rounded-full" />
      ) : (
        <span className="block rounded-full">{fallback}</span>
      )}
    </span>
  )
}
