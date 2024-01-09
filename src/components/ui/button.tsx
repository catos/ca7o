import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: ReactNode
  color?: "primary" | "danger"
} & ButtonHTMLAttributes<HTMLButtonElement>

const colors = {
  primary: {
    bg: "bg-primary-700 hover:bg-primary-800",
    text: "text-white",
  },
  danger: {
    bg: "bg-red-700 hover:bg-red-800",
    text: "text-white",
  },
}

export default function Button({
  color = "primary",
  className,
  children,
  ...rest
}: Props) {
  const classes = twMerge(
    "bg-primary-700 hover:bg-primary-900 text-white text-sm py-2 px-4 rounded",
    colors[color].bg,
    colors[color].text,
    className
  )
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
