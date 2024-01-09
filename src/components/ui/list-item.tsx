import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLLIElement>

export default function ListItem({ className, ...rest }: Props) {
  const classes = twMerge(
    "p-1 hover:bg-primary-900 hover:bg-opacity-5 rounded",
    className
  )

  return <li className={classes} {...rest} />
}
