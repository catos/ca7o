// TODO: remove ?
export default function foo() { return null }

// "use client"

// import slugify from "@/lib/slugify"
// import { cn } from "@/lib/utils"
// import { useState } from "react"
// import { twMerge } from "tailwind-merge"

// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"

// export default function ListItem({
//   index,
//   children,
// }: {
//   index: any
//   children: any
// }) {
//   const [checked, setChecked] = useState(false)

//   const id = `${index}-${slugify(children[0])}`
//   const handleChange = () => {
//     setChecked(!checked)
//   }

//   return (
//     <div className="py-2 flex items-center space-x-2">
//       <Checkbox id={id} checked={checked} onCheckedChange={handleChange} />
//       <Label
//         className={twMerge("font-normal", checked && "line-through")}
//         htmlFor={id}
//       >
//         {children}
//       </Label>
//     </div>
//   )
// }
