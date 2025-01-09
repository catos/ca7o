import NextLink, { LinkProps } from "next/link"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
} & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ className, href, ...rest }: Props) {
  const classes = twMerge(
    "underline text-link underline-offset-4 hover:underline hover:text-link/80",
    className
  )

  return <NextLink className={classes} href={href} {...rest} />
}
