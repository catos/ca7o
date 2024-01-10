"use client"

import { InputHTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Checkbox(props: Props) {
  const { id, label, className, ...rest } = props
  const [checked, setChecked] = useState(false)
  console.log(checked)
  const classes = ""
  //    twMerge(
  //     "appearance-none border rounded p-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
  //     className
  //   )

  const handleChange = () => {
    setChecked(!checked)
  }

  const Checkbox = (
    <input
      className={classes}
      type="checkbox"
      id={id}
      checked={checked}
      onChange={handleChange}
      {...rest}
    />
  )

  if (!label) {
    return Checkbox
  }

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
      {Checkbox}
    </div>
  )
}
