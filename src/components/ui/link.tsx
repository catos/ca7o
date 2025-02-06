import NextLink, { LinkProps } from "next/link"
import { AnchorHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ className, href, ...rest }: Props) {
  const classes = twMerge(className)

  return <NextLink className={classes} href={href} {...rest} />
}
