import { twMerge } from "tailwind-merge"
import { Link } from "@/components/ui/link"
import { Image } from "@/components/image"

type Props = {
  image: string
  href: string
  title: string
  description: string | null
  tags?: string[]
}

// TODO: move to lib ?
function snip(title: string, length: number): string {
  if (title.length > length) {
    return title.substring(0, length) + "..."
  }
  return title
}

export default function Card({ image, href, title }: Props) {
  return (
    <Link
      className="group ui-outline relative flex max-h-64 w-full flex-col overflow-hidden rounded no-underline shadow-lg"
      href={href}
    >
      <Image
        className="bg-primary-300 h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
        src={image}
        alt={title}
      />
      <CardHeading title={title} />
    </Link>
  )
}

function CardHeading({ title }: { title: string }) {
  let size = "text-2xl"

  if (title.length > 15) {
    size = "text-xl"
  }

  if (title.length > 30) {
    size = "text-lg"
  }

  return (
    <h2
      className={twMerge(
        "bg-background/75 absolute right-0 bottom-0 left-0 mb-0 flex h-24 flex-1 items-center overflow-hidden px-4 text-xl leading-6 font-semibold text-white",
        size
      )}
    >
      {snip(title, 50)}
    </h2>
  )
}
