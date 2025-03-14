import { twMerge } from "tailwind-merge"

type Props = {
  src: string
  alt: string
  className?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

// TODO: use Next image
export function Image({ src, alt, className }: Props) {
  const classes = twMerge("w-full", className)
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={classes} src={src} alt={alt} />
}
