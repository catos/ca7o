import Icon from "@/components/icon"
import Image from "@/components/image"
import Markdown from "@/components/recipe/markdown"

import { getRecipe, getRecipes } from "@/data/recipe-actions"

import Badge from "@/components/ui/badge"
import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"

export const revalidate = 60 * 60 * 24

type Props = {
  params: { slug: string }
}

// TODO: implement dynamic metadata
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const user = await prisma.user.findUnique({ where: { id: params.id } })
//   return { title: `User profile of ${user?.name}` }
// }

// TODO: implement like | dislike: https://fireship.io/courses/nextjs/adv-actions/

export default async function RecipesPage({ params }: Props) {
  const recipe = await getRecipe(+params.slug)
  if (!recipe) return null

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        {/* TODO: move this */}
        <Link
          className="absolute top-2 right-2 no-underline font-bold opacity-60 bg-primary-900 text-primary-100 rounded-full p-2"
          href={`/admin/recipes/${recipe.id}`}
        >
          <Icon className="w-4 h-4" name="edit" />
        </Link>
        <Image
          className="max-h-64 sm:max-h-96 object-cover"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>

      <section className="flex flex-col">
        <Heading as="h1" className="px-4 m-0 text-center font-semibold">
          {recipe.title}
        </Heading>
        <div>
          <Badge>Fisk</Badge>
          <Badge>Enkel</Badge>
          <Badge>Sunn</Badge>
        </div>
        <div>Tags - Favorites - Skriv ut</div>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row">
        <section className="rounded-lg sm:w-1/2 md:w-5/12 bg-white p-4">
          <Heading as="h2" className="uppercase text-primary-500 text-lg">
            Ingrendienser
          </Heading>
          <Markdown>{recipe.ingredients}</Markdown>
        </section>

        <section className="rounded-lg sm:w-1/2 md:w-7/12 bg-white p-4">
          <Heading as="h2" className="uppercase text-primary-500 text-lg">
            Slik gjør du
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
