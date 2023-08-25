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

export default function Card({ image, href, title, description, tags }: ICard) {
  return (
    <Link
      className="no-underline w-full rounded overflow-hidden shadow-lg hover:outline hover:outline-primary-600 hover:outline-2"
      href={href}
    >
      <Image
        className="max-h-48 object-cover bg-primary-300"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <Title type="h2" className="font-bold text-xl mb-0">
          {title}
        </Title>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {tags && (
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
