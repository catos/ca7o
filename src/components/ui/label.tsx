import { LabelHTMLAttributes } from "react"

type Props = {
  children: React.ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export default function Label({ children, ...rest }: Props) {
  return (
    <label
      className="block text-foreground/80 text-sm font-bold mb-2 cursor-pointer"
      {...rest}
    >
      {children}
    </label>
  )
}
