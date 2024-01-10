"use client"

import { InputHTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  id: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Checkbox(props: Props) {
  const { id, label, className, ...rest } = props

  const classes = twMerge(
    "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
    className
  )

  const Checkbox = (
    <input className={classes} type="checkbox" id={id} {...rest} />
  )

  if (!label) {
    return Checkbox
  }

  return (
    <div className="flex gap-1 items-center">
      {Checkbox}
      {label && (
        <label className="ms-2" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}
