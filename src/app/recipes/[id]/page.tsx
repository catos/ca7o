import Image from "@/components/image"
import Markdown from "@/components/recipe/markdown"
import { BookPlusIcon, CookingPot, PrinterIcon } from "lucide-react"

import { getRecipe } from "@/data/recipe.actions"

import { Badge } from "@/components/ui/badge"
import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"
// import ToggleFavorite from "@/components/recipe/toggle-favorite"

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
    <div className="flex flex-col gap-4">
      <section className="relative">
        <Link
          className="absolute top-2 right-2 no-underline font-bold opacity-60 bg-background rounded-full p-2"
          href={`/recipes/${recipe.id}/edit`}
        >
          <CookingPot />
        </Link>
        <Image
          className="max-h-64 sm:max-h-96 object-cover"
          src={recipe.image}
          alt={recipe.title}
        />
      </section>

      <section className="flex flex-col">
        <Heading as="h1" className="px-4 m-0 text-center font-semibold">
          {recipe.title}
        </Heading>
        <div className="py-4 flex gap-2 justify-center">
          <Badge>Fisk</Badge>
          <Badge>Enkel</Badge>
          <Badge>Sunn</Badge>
        </div>
        <div className="pb-4 flex gap-4 justify-center">
          {/* <ToggleFavorite recipe={recipe} /> */}
          <div>Legg til oppskrift i meny</div>
          <div>Skriv ut</div>
        </div>
      </section>

      <div className="flex flex-col gap-4 md:flex-row">
        <section className="rounded-md md:w-5/12 bg-white p-4">
          <Heading as="h2" className="uppercase text-foreground/50 text-base">
            Ingrendienser
          </Heading>
          <Markdown>{recipe.ingredients}</Markdown>
        </section>

        <section className="rounded-md md:w-7/12 bg-white p-4">
          <Heading as="h2" className="uppercase text-foreground/50 text-base">
            Fremgangsmåte
          </Heading>
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
