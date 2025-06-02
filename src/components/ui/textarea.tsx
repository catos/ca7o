import { Field, Textarea as HeadlessTextarea, Label } from "@headlessui/react"
import { TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  id: string
  label?: string
  className?: string
  rows?: number
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: Props) {
  const { id, label, className, rows = 3, ...rest } = props

  const baseStyles =
    "bg-foreground/5 block w-full resize-none rounded-lg border-none px-3 py-1.5 text-sm/6 ui-outline"

  const textareaStyles = twMerge(baseStyles, className)

  return (
    <Field className="flex flex-col gap-3">
      {label && (
        <Label htmlFor={id} className="text-sm/6 font-medium">
          {label}
        </Label>
      )}
      <HeadlessTextarea
        id={id}
        className={textareaStyles}
        rows={rows}
        {...rest}
      />
    </Field>
  )
}
