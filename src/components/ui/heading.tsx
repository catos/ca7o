import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
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
    "font-medium leading-none tracking-tight text-gray-900",
    titleTypes[as],
    className
  )
  return <h1 className={classes}>{children}</h1>
}
