import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  const { id, label, className, readOnly, ...rest } = props
  const classes = twMerge(
    "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    readOnly && "text-foreground/50",
    className
  )

  const Input = (
    <input className={classes} id={id} readOnly={readOnly} {...rest} />
  )

  if (!label) {
    return Input
  }

  return (
    <div>
      {label && (
        <label
          className="block text-foreground/80 text-sm font-bold mb-2 cursor-pointer"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {Input}
    </div>
  )
}
