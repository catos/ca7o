import Image from "@/components/image"
import Link from "@/components/ui/link"

interface ICard {
  image: string
  href: string
  title: string
  description: string | null
  tags?: string[]
}

export default function Card({ image, href, title, description, tags }: ICard) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <Image src={image} alt={title} />
      <div className="px-6 py-4">
        <Link className="font-bold text-xl mb-2" href={href}>
          {title}
        </Link>
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
    </div>
  )
}
