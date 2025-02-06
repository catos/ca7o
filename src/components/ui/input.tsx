import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  const { id, label, className, error, ...rest } = props
  const classes = twMerge("input", className)

  const Input = <input className={classes} id={id} {...rest} />

  if (!label) {
    return Input
  }

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {Input}
      {error && <p className="m-0 text-destructive">{error}</p>}
    </div>
  )
}
