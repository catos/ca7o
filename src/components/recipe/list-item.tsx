"use client"

import slugify from "@/lib/slugify"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export default function ListItem({
  index,
  children,
}: {
  index: any
  children: any
}) {
  const [checked, setChecked] = useState(false)

  const id = `${index}-${slugify(children[0])}`
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        name={id}
        className="checkbox"
      />
      <label
        htmlFor={id}
        className={twMerge(
          "p-2 text-base inline-block cursor-pointer whitespace-normal flex-grow",
          checked ? "text-slate-500 line-through" : "inherit"
        )}
      >
        {children}
      </label>
    </div>
  )
}
