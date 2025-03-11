import ReactMarkdown from "react-markdown"
import { Image } from "@/components/image"
import Timer from "@/components/timer"

export function Markdown({ children }: { children: string | null }) {
  if (!children) return null

  return (
    <ReactMarkdown
      components={{
        h1: (props: any) => {
          const { children } = props
          return <h2>{children}</h2>
        },

        h2: (props: any) => {
          const { children } = props
          return <h3>{children}</h3>
        },

        ul: ({ children, node, ...props }) => {
          if (!Array.isArray(children)) {
            return null
          }

          const items = children.filter((p) => typeof p === "object")
          return (
            <ul>
              {items.map(({ key, props }) => (
                <li key={key} {...props} />
              ))}
            </ul>
          )
        },

        // li: ({ children, node, ...props }) => {
        //   return <li>{children}</li>
        //   //   console.log({ children, node, props })
        //   //   const id = `checkbox-${children}`
        //   //   return (
        //   //     <li className="flex items-center" {...props}>
        //   //       <input type="checkbox" id={id} className="mr-2" />
        //   //       <label htmlFor={id} className="w-full">
        //   //         {children} {id}
        //   //       </label>
        //   //     </li>
        //   //   )
        // },

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
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
