import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLUListElement>

export function List({ children, className, ...rest }: Props) {
  const classes = twMerge("flex flex-col gap-0 pl-4 list-disc", className)

  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  )
}
