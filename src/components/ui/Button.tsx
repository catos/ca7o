import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...rest }: IProps) {
  return (
    <button
      className="bg-primary-500 hover:bg-primary-700 text-white py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  )
}
