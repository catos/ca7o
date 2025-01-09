import { TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  name: string
  expandOnFocus?: boolean
  required?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea(props: Props) {
  const { id, className, expandOnFocus = false, ...rest } = props

  const classes = twMerge(
    "block w-full h-48 bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    expandOnFocus && "focus:shadow-outline",
    className
  )

  return <textarea className={classes} id={id} {...rest} />
}
