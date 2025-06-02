import { Field, Input as HeadlessInput, Label } from "@headlessui/react"
import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  id: string
  label?: string
  className?: string
  error?: string
  ref?: React.RefObject<HTMLInputElement | null>
} & InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  const { id, label, className, error, ...rest } = props

  const baseStyles =
    "block w-full rounded-lg border-none bg-foreground/5 px-3 py-1.5 text-sm/6 ui-outline"

  const inputStyles = twMerge(baseStyles, className)

  return (
    <Field className="flex flex-col gap-3">
      {label && (
        <Label htmlFor={id} className="block text-sm/6 font-medium">
          {label}
        </Label>
      )}
      <HeadlessInput id={id} className={inputStyles} {...rest} />
      {error && <p className="text-destructive m-0">{error}</p>}
    </Field>
  )
}
