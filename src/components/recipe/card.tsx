import Image from "@/components/image"

import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

interface ICard {
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

// TODO: make card generic again!!!?
export default function Card({ image, href, title, description, tags }: ICard) {
  return (
    <Link
      className="relative flex flex-col max-h-64 no-underline w-full rounded overflow-hidden shadow-lg hover:outline hover:outline-primary-600 hover:outline-2"
      href={href}
    >
      <Image
        className="h-64 object-cover bg-primary-300"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-center p-2 bg-primary-300 bg-opacity-50 overflow-hidden">
        <Title type="h2" className="font-bold text-xl mb-0">
          {snip(title, 50)}
        </Title>
      </div>
    </Link>
  )
}
