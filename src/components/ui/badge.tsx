import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLSpanElement>

export default function Badge({ className, ...rest }: Props) {
  const classes = twMerge(
    "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
    className
  )
  return <span className={classes} {...rest} />
}
