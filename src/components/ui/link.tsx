import NextLink, { LinkProps } from "next/link"
import { AnchorHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ className, href, ...rest }: Props) {
  const classes = twMerge(
    "font-medium underline underline-offset-4 hover:foreground/80",
    className
  )

  return <NextLink className={classes} href={href} {...rest} />
}
