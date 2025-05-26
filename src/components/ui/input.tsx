import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  label?: string
  error?: string
  ref?: React.RefObject<HTMLInputElement | null>
} & InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  const { id, label, className, error, ...rest } = props
  const classes = twMerge(
    "flex w-full rounded-md border-2 border-input bg-background px-3 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className
  )

  const Input = <input className={classes} id={id} {...rest} />

  if (!label) {
    return Input
  }

  return (
    <div>
      {label && (
        <label className="mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      {Input}
      {error && <p className="m-0 text-destructive">{error}</p>}
    </div>
  )
}
