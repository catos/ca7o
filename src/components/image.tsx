import { twMerge } from "tailwind-merge"

interface IImage {
  src: string
  alt: string
  className?: string
}

export default function Image({ src, alt, className }: IImage) {
  const classes = twMerge("w-full", className)
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={classes} src={src} alt={alt} />
}
