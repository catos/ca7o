import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4"
  className?: string
} & React.HTMLAttributes<HTMLHeadingElement>

const titleTypes = {
  h1: "text-4xl font-extrabold",
  h2: "text-3xl font-semibold mt-10",
  h3: "text-2xl font-semibold mt-8",
  h4: "text-xl",
}

export function Heading({ as = "h1", children, className }: Props) {
  const classes = twMerge("tracking-tight", titleTypes[as], className)
  return <h1 className={classes}>{children}</h1>
}
