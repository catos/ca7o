import { twMerge } from "tailwind-merge"

export type ListItemProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLLIElement>

export function ListItem({ className, ...rest }: ListItemProps) {
  const classes = twMerge(
    "p-1 hover:bg-primary-900 hover:bg-opacity-5 rounded",
    className
  )

  return <li className={classes} {...rest} />
}
