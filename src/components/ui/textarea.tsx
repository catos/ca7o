import { TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  name: string
  expandOnFocus?: boolean
  required?: boolean
  label?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea(props: Props) {
  const { id, label, className, expandOnFocus = false, ...rest } = props

  const classes = twMerge(
    "block w-full bg-white border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    expandOnFocus && "focus:shadow-outline",
    className
  )

  const Textarea = <textarea className={classes} id={id} {...rest} />

  if (!label) {
    return Textarea
  }

  return (
    <div>
      <label
        className="block text-primary-700 text-sm font-bold mb-2 cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
      {Textarea}
    </div>
  )
}
