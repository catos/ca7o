import { ReactMarkdown, ReactNode } from "react-markdown/lib/react-markdown"

import List from "@/components/ui/list"
import ListItem from "@/components/ui/list-item"
import Title from "@/components/ui/title"

export default function Markdown({ children }: { children: string | null }) {
  if (!children) return null

  return <ReactMarkdown components={serializers}>{children}</ReactMarkdown>
}

const serializers = {
  h1: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <Title>{children}</Title>
  },
  h2: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <Title type="h2">{children}</Title>
  },
  h3: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <Title type="h3">{children}</Title>
  },
  ul: ({ children }: { children: ReactNode & ReactNode[] }) => (
    <List>{children}</List>
  ),
  li: ({ children }: { children: ReactNode & ReactNode[] }) => {
    return <ListItem>{children}</ListItem>
  },
  p: ({ children }: any) => {
    return <p>{children}</p>
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
