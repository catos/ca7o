"use client"

import { Form } from "radix-ui"
import { TextareaHTMLAttributes, useEffect, useRef } from "react"
import { twMerge } from "tailwind-merge"

type DynamicHeightProps = {
  initial?: number
  clampAt?: number
}

type Props = {
  id: string
  name: string
  label?: string
  className?: string
  dynamicHeight?: DynamicHeightProps
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: Props) {
  const { id, name, label, className, value, dynamicHeight, ...rest } = props

  const baseStyles =
    "bg-foreground/5 block w-full resize-none rounded-lg border-none px-3 py-1.5 text-sm/6 ui-outline"

  const textareaStyles = twMerge(baseStyles, className)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textareaRef.current && dynamicHeight) {
      const { initial = 32, clampAt } = dynamicHeight

      textareaRef.current.style.height = `${initial}px` // Reset height - important to shrink on delete
      const computed = window.getComputedStyle(textareaRef.current)
      const elementHeight =
        textareaRef.current.scrollHeight +
        parseInt(computed.getPropertyValue("border-top-width")) +
        parseInt(computed.getPropertyValue("border-bottom-width"))

      let clampedHeight = elementHeight
      if (clampAt) {
        clampedHeight = elementHeight > clampAt ? clampAt : elementHeight
      }

      textareaRef.current.style.height = `${clampedHeight}px`
    }
  }, [value])

  return (
    <Form.Field name={name} className="flex flex-col gap-3">
      {label && (
        <Form.Label htmlFor={id} className="text-sm/6 font-medium">
          {label}
        </Form.Label>
      )}
      <Form.Control asChild>
        <textarea
          id={id}
          className={textareaStyles}
          ref={textareaRef}
          value={value}
          {...rest}
        />
      </Form.Control>
    </Form.Field>
  )
}
