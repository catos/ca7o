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
      className="hover:outline-primary-700 relative flex max-h-64 w-full flex-col overflow-hidden rounded no-underline shadow-lg hover:outline hover:outline-2"
      href={href}
    >
      <Image
        className="bg-primary-300 h-64 object-cover"
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
        "absolute bottom-0 left-0 right-0 mb-0 flex h-24 flex-1 items-center overflow-hidden bg-slate-900 bg-opacity-75 px-4 text-xl font-semibold leading-6 text-white",
        size
      )}
    >
      {snip(title, 50)}
    </h2>
  )
}
