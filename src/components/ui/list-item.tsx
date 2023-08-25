import { twMerge } from "tailwind-merge"

interface IListItem extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
}

export default function ListItem({ className, ...rest }: IListItem) {
  const classes = twMerge(
    "p-2 hover:bg-primary-900 hover:bg-opacity-5 rounded",
    className
  )

  return <li className={classes} {...rest} />
}
