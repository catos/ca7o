"use client"

import slugify from "@/lib/slugify"
import { useState } from "react"

import Checkbox from "../ui/checkbox"

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
    <div className="py-1">
      <Checkbox
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        name={id}
        label={children}
      />
    </div>
  )
}
