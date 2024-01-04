import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
  const { id, label, className, ...rest } = props
  const classes = twMerge(
    "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    className
  )

  return (
    <div>
      {label && (
        <label
          className="block text-primary-700 text-sm font-bold mb-2 cursor-pointer"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input className={classes} id={id} {...rest} />
    </div>
  )
}
