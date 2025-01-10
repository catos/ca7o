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
    "w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold bg-slate-200",
    className
  )

  return (
    <span className={classes}>
      {src ? (
        <img src={src} alt="Avatar" className="rounded-full" />
      ) : (
        <span className="rounded-full">{fallback}</span>
      )}
    </span>
  )
}
