import NextLink, { LinkProps } from "next/link"
import { twMerge } from "tailwind-merge"

interface ILink extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {
  className?: string
}

export default function Link({ className, ...rest }: ILink) {
  const classes = twMerge(
    "underline text-slate-600 hover:text-slate-800",
    className
  )
  return <NextLink className={classes} {...rest} />
}
