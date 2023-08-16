import { HTMLAttributes, ReactNode } from "react"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Navbar({ children }: IProps) {
  return (
    <nav className="flex items-center justify-between flex-wrap border-b border-primary-300 px-6 py-4">
      {children}
    </nav>
  )
}
