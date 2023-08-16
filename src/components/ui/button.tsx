import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...rest }: IProps) {
  return (
    <button
      className="bg-primary-700 hover:bg-primary-900 text-white text-sm py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  )
}
