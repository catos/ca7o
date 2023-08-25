import { twMerge } from "tailwind-merge"

interface IList extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}

export default function List({ children, className, ...rest }: IList) {
  const classes = twMerge("flex flex-col gap-0 pl-4 list-disc", className)

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  )
}
