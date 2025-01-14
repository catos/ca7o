import Image from "@/components/image"
import { twMerge } from "tailwind-merge"

import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"

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
      className="relative flex flex-col max-h-64 no-underline w-full rounded overflow-hidden shadow-lg hover:outline hover:outline-primary-700 hover:outline-2"
      href={href}
    >
      <Image
        className="h-64 object-cover bg-primary-300"
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
    <Heading
      as="h2"
      className={twMerge(
        "absolute bottom-0 left-0 right-0 h-24 flex flex-1 items-center px-4 bg-slate-900 bg-opacity-75 overflow-hidden font-semibold text-white mb-0",
        size
      )}
    >
      {snip(title, 50)}
    </Heading>
  )
}
