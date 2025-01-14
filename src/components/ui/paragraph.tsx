import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & React.HTMLAttributes<HTMLParagraphElement>

export function Paragraph({ children, className }: Props) {
  const classes = twMerge("leading-7 [&:not(:first-child)]:mt-6", className)
  return <p className={classes}>{children}</p>
}
