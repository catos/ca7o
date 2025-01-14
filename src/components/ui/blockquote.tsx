import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & React.HTMLAttributes<HTMLParagraphElement>

export function Blockquote({ children, className }: Props) {
  const classes = twMerge("border-l-2 pl-6 mt-6 italic", className)
  return <blockquote className={classes}>{children}</blockquote>
}
