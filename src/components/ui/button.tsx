import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className, children, ...rest }: Props) {
  const classes = twMerge(
    "bg-primary-700 hover:bg-primary-900 text-white text-sm py-2 px-4 rounded",
    className
  )
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
