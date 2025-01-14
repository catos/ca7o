import Image from "@/components/image"

import { Heading } from "@/components/ui/heading"
import { List } from "@/components/ui/list"
import { ListItem } from "@/components/ui/list-item"

import Timer from "../timer"

import Markdown from "react-markdown"

export default function MarkdownLol({ children }: { children: string | null }) {
  if (!children) return null

  return <Markdown components={serializers}>{children}</Markdown>
}

const serializers = {
  h1: (props: any) => {
    const { children } = props
    return <Heading as="h2">{children}</Heading>
  },

  h2: (props: any) => {
    const { children } = props
    return <Heading as="h3">{children}</Heading>
  },

  ul: (props: any) => {
    const { children } = props

    return <List>{children}</List>
  },

  li: (props: any) => {
    const { children } = props
    return <ListItem>{children}</ListItem>
  },

  p: ({ children }: any) => {
    return <p className="m-0">{children}</p>
  },

  code: (props: any) => {
    const { children, className, node, ...rest } = props

    const code = children && children[0]
    if (code && code.startsWith("timer:")) {
      return <Timer value={parseInt(code.replace("timer:", ""))} />
    }
    return (
      <code {...rest} className={className}>
        {children}
      </code>
    )
  },

  img: ({ children, ...rest }: any) => {
    return (
      <span className="relative">
        <Image src={rest.src} alt={rest.alt} />
      </span>
    )
  },

  link: ({ href, children, ...rest }: any) => {
    return (
      <a href={href} className="text-red-900" {...rest}>
        {children}
      </a>
    )
  },
}
