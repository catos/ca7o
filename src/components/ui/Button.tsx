import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...rest }: IProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  )
}
