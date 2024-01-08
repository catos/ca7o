import { ReactMarkdown, ReactNode } from "react-markdown/lib/react-markdown"

import Heading from "@/components/ui/heading"
import List from "@/components/ui/list"
import ListItem from "@/components/ui/list-item"

export default function Markdown({ children }: { children: string | null }) {
  if (!children) return null

  return <ReactMarkdown components={serializers}>{children}</ReactMarkdown>
}

const serializers = {
  h1: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <Heading>{children}</Heading>
  },
  h2: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <Heading as="h2">{children}</Heading>
  },
  h3: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <Heading as="h3">{children}</Heading>
  },
  ul: ({ children }: { children: ReactNode & ReactNode[] }) => (
    <List>{children}</List>
  ),
  li: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <ListItem>{children}</ListItem>
  },
  p: ({ children }: any) => {
    return <p className="m-0">{children}</p>
  },
  //   code: ({ children }: { children: ReactNode & ReactNode[] }) => {
  //     const code = children && children[0]
  //     if (code.startsWith("timer:")) {
  //       return <Timer value={parseInt(code.replace("timer:", ""))} />
  //     }
  //     return <pre>{props.value}</pre>
  //   },
  //   img: ({ children }: { children: ReactNode & ReactNode[] }) => (
  //     <div {...props} />
  //   ),
}
