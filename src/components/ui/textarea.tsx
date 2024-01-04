import { TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  name: string
  expandOnFocus?: boolean
  required?: boolean
  label?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea(props: Props) {
  const { id, label, expandOnFocus, ...rest } = props

  return (
    <div>
      <label
        className="block text-primary-700 text-sm font-bold mb-2 cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className={twMerge(
          "appearance-none h-32 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          expandOnFocus && "focus:h-64"
        )}
        id={id}
        {...rest}
      />
    </div>
  )
}
