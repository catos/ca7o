import NextLink, { LinkProps } from "next/link"

interface ILink extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {}

export default function Link(props: ILink) {
  return <NextLink {...props} />
}
