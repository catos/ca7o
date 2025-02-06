import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  variant?: "info" | "success" | "warning"
} & React.HTMLAttributes<HTMLDivElement>

const VARIANTS = {
  info: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-destructive",
} as const

export function Alert({ variant = "info", className, ...rest }: Props) {
  const classes = twMerge(
    "flex items-center gap-4 rounded p-4",
    VARIANTS[variant],
    className
  )

  return <div className={classes} {...rest} />
}
