import Icon from "@/components/icon"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  name: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ name, className, ...rest }: Props) {
  const classes = twMerge(
    "text-primary-400 hover:text-primary-900 p-1 border-primary-400 hover:border-primary-900 rounded-full border",
    className
  )
  return (
    <button className={classes} {...rest}>
      <Icon className="w-4 h-4" name={name} />
    </button>
  )
}
