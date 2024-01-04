import NextLink, { LinkProps } from "next/link"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & LinkProps &
  React.HTMLAttributes<HTMLAnchorElement>

export default function Link({ className, ...rest }: Props) {
  const classes = twMerge(
    "underline text-slate-600 hover:text-slate-800",
    className
  )
  return <NextLink className={classes} {...rest} />
}
