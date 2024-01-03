import { twMerge } from "tailwind-merge"

interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  className?: string
}

const titleTypes = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
}

export default function Title({ type = "h1", children, className }: ITitle) {
  const classes = twMerge(
    "font-bold leading-none tracking-tight text-gray-900",
    titleTypes[type],
    className
  )
  return <h1 className={classes}>{children}</h1>
}
