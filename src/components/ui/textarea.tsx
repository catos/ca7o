import { Field, Textarea as HeadlessTextarea, Label } from "@headlessui/react"
import { TextareaHTMLAttributes, useEffect, useRef } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  id: string
  label?: string
  className?: string
  height?: number
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: Props) {
  const { id, label, className, value, height = 64, ...rest } = props

  const baseStyles =
    "bg-foreground/5 block w-full resize-none rounded-lg border-none px-3 py-1.5 text-sm/6 ui-outline"

  const textareaStyles = twMerge(baseStyles, className)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${height}px` // Reset height - important to shrink on delete
      const computed = window.getComputedStyle(textareaRef.current)
      const elementHeight =
        textareaRef.current.scrollHeight +
        parseInt(computed.getPropertyValue("border-top-width")) +
        parseInt(computed.getPropertyValue("border-bottom-width"))
      const clampedHeight = elementHeight > 300 ? 300 : elementHeight
      textareaRef.current.style.height = `${clampedHeight}px`
    }
  }, [value])

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
        ref={textareaRef}
        value={value}
        {...rest}
      />
    </Field>
  )
}
