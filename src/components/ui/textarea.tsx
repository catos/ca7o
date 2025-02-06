import { TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  name: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: Props) {
  const { id, className, ...rest } = props

  const classes = twMerge(className)

  return <textarea className={classes} id={id} {...rest} />
}
