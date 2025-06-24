import { snip } from "@/lib/snip"
import { Tables } from "@/types/database"
import { TimerIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { Link } from "@/components/ui/link"
import { Image } from "@/components/image"

interface IProps {
  recipe: Tables<"recipes">
}

export default function Card({ recipe }: IProps) {
  const { id, title, image } = recipe
  const href = `/recipes/${id}`

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
      <PreparationTime preparationTime={0} />
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
        "bg-background/80 text-foreground absolute right-0 bottom-0 left-0 mb-0 flex h-24 flex-1 items-center overflow-hidden px-4 text-xl group-hover:opacity-20",
        size
      )}
    >
      {snip(title, 50)}
    </h2>
  )
}

function PreparationTime({ preparationTime }: { preparationTime: number }) {
  const getPreparationText = (time: number) => {
    if (time <= 15) {
      return "15"
    }
    if (time <= 30) {
      return "15-30"
    }
    if (time <= 60) {
      return "30-60"
    }

    return "60+"
  }

  const text = getPreparationText(preparationTime)

  return (
    <div className="bg-background/75 absolute top-2 right-2 flex items-center justify-center gap-1 rounded-full px-3 py-2 text-sm group-hover:opacity-20">
      <TimerIcon className="w-5" />
      <span className="font-semibold">{text}</span>
    </div>
  )
}
