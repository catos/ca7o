import { twMerge } from "tailwind-merge"

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLHeadingElement>

const titleTypes = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
}

export default function Heading({ as = "h1", children, className }: Props) {
  const classes = twMerge(
    "font-bold leading-none tracking-tight text-gray-900",
    titleTypes[as],
    className
  )
  return <h1 className={classes}>{children}</h1>
}