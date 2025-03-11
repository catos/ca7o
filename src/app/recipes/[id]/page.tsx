import { CookingPot, HeartIcon, PrinterIcon, StarIcon } from "lucide-react"
import { getRecipe } from "@/data/recipe.actions"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Image } from "@/components/image"
import { Markdown } from "@/components/recipe/markdown"

export const revalidate = 60 * 60 * 24

type Props = {
  params: { id: string }
}

// TODO: implement dynamic metadata
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const user = await prisma.user.findUnique({ where: { id: params.id } })
//   return { title: `User profile of ${user?.name}` }
// }

// TODO: implement like | dislike: https://fireship.io/courses/nextjs/adv-actions/

export default async function RecipesPage({ params }: Props) {
  const recipe = await getRecipe(params.id)

  if (!recipe) {
    return null
  }

  return (
    <div className="-mt-4 flex flex-col gap-4 md:gap-6">
      <section className="relative">
        <Link
          className="absolute right-2 top-2 rounded-full bg-background p-2 font-bold no-underline opacity-60"
          href={`/recipes/${recipe.id}/edit`}
        >
          <CookingPot />
        </Link>
        <Image
          className="max-h-64 w-full object-cover sm:max-h-96"
          src={recipe.image}
          alt={recipe.title}
        />
      </section>

      <section className="flex flex-col">
        <h1 className="m-0 px-4 text-center font-semibold">{recipe.title}</h1>
      </section>

      {recipe.description && (
        <section>
          <Markdown>{recipe.description}</Markdown>
        </section>
      )}

      <section className="flex justify-center gap-4">
        <span>
          <Button variant="button-icon">
            <StarIcon />
          </Button>
        </span>
        <Button variant="button-icon">
          <HeartIcon />
        </Button>
        <span>
          <Button variant="button-icon">
            <PrinterIcon />
          </Button>
        </span>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row">
        <section className="min-h-64 rounded-md sm:w-1/2 md:w-5/12">
          <h2 className="text-base uppercase text-muted">Ingrendienser</h2>
          <Markdown>{recipe.ingredients}</Markdown>
        </section>

        <section className="min-h-64 rounded-md sm:w-1/2 md:w-7/12">
          <h2 className="text-base uppercase text-muted">Fremgangsmåte</h2>
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
