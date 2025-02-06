import Image from "@/components/image"

import Timer from "../timer"

import Markdown from "react-markdown"

export default function MarkdownLol({ children }: { children: string | null }) {
  if (!children) return null

  return <Markdown components={serializers}>{children}</Markdown>
}

const serializers = {
  h1: (props: any) => {
    const { children } = props
    return <h2>{children}</h2>
  },

  h2: (props: any) => {
    const { children } = props
    return <h3>{children}</h3>
  },

  ul: (props: any) => {
    const { children } = props

    return <ul>{children}</ul>
  },

  li: (props: any) => {
    const { children } = props
    return <li>{children}</li>
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
