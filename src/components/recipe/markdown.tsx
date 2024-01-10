import Image from "@/components/image"
import { ReactMarkdown, ReactNode } from "react-markdown/lib/react-markdown"

import Heading from "@/components/ui/heading"
import List from "@/components/ui/list"

import Timer from "../timer"
import ListItem from "./list-item"

export default function Markdown({ children }: { children: string | null }) {
  if (!children) return null

  return <ReactMarkdown components={serializers}>{children}</ReactMarkdown>
}

const serializers = {
  h1: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return (
      <Heading as="h3" className="mt-2 mb-0">
        {children}
      </Heading>
    )
  },
  h2: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return (
      <Heading as="h4" className="mt-2 mb-0">
        {children}
      </Heading>
    )
  },
  h3: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return (
      <Heading as="h5" className="mt-2 mb-0">
        {children}
      </Heading>
    )
  },
  // TODO: move this to separate component since I did this with "li" ?
  ul: ({ children }: { children: ReactNode & ReactNode[] }) => (
    <List className="list-none p-0">{children}</List>
  ),
  li: (props: any) => {
    return <ListItem {...props} />
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
  //   img: ({ children, ...rest }: { children: ReactNode & ReactNode[] }) => {
  img: ({ children, ...rest }: any) => {
    console.log(children, rest)
    return (
      <span className="relative">
        <Image src={rest.src} alt={rest.alt} />
      </span>
    )
  },
}
