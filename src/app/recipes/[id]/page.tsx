import {
  CookingPot,
  HeartIcon,
  PrinterIcon,
  ShareIcon,
  StarIcon,
  TimerIcon,
} from "lucide-react"
import { getRecipe } from "@/data/recipe.actions"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Image } from "@/components/image"
import { Markdown } from "@/components/recipe/markdown"

export const revalidate = 3600

type Props = {
  params: Promise<{ id: string }>
}

// TODO: implement dynamic metadata
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const user = await prisma.user.findUnique({ where: { id: params.id } })
//   return { title: `User profile of ${user?.name}` }
// }

// TODO: implement like | dislike: https://fireship.io/courses/nextjs/adv-actions/

export default async function RecipesPage({ params }: Props) {
  const { id } = await params
  const recipe = await getRecipe(id)

  if (!recipe) {
    return null
  }

  return (
    <div className="-mt-4 flex flex-col gap-4 md:gap-6">
      <section className="relative">
        <Link
          className="bg-background absolute top-2 right-2 rounded-full p-2 no-underline opacity-60"
          href={`/recipes/${recipe.id}/edit`}
        >
          <CookingPot />
        </Link>
        <Image
          className="max-h-64 w-full object-cover sm:max-h-96"
          src={recipe.image}
          alt={recipe.title}
        />
        <h1 className="text-foreground bg-background/40 absolute right-0 bottom-0 left-0 mb-0 flex h-24 flex-1 items-center justify-center overflow-hidden px-4 text-center text-2xl backdrop-blur-xs group-hover:opacity-20">
          {recipe.title}
        </h1>
      </section>

      {recipe.description && (
        <section className="text-center">
          <Markdown>{recipe.description}</Markdown>
        </section>
      )}

      <section className="bg-foreground/10 flex justify-center gap-4 p-4">
        <Button variant="icon">
          <HeartIcon />
        </Button>
        <Button variant="icon">
          <TimerIcon />
        </Button>
        <Button variant="icon">
          <PrinterIcon />
        </Button>
        <Button variant="icon">
          <ShareIcon />
        </Button>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row">
        <section className="min-h-64 rounded-md sm:w-1/2 md:w-5/12">
          <h2 className="text-muted text-base uppercase">Ingrendienser</h2>
          <Markdown>{recipe.ingredients}</Markdown>
        </section>

        <section className="min-h-64 rounded-md sm:w-1/2 md:w-7/12">
          <h2 className="text-muted text-base uppercase">Fremgangsmåte</h2>
          <Markdown>{recipe.instructions}</Markdown>
        </section>
      </div>
    </div>
  )
}

// TODO: not working ? what is this ?
// export async function generateStaticParams() {
//   const recipes = await getRecipes()
//   return recipes.map((recipe) => ({ params: { slug: recipe.id.toString() } }))
// }
