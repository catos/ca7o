import Icon from "@/components/icon"
import Image from "@/components/image"
import Markdown from "@/components/markdown"

import { getRecipe, getRecipes } from "@/data/recipe-actions"

import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

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
      <div>
        <div className="relative">
          <Link
            className="absolute top-2 right-2 no-underline font-bold opacity-60 bg-primary-900 text-primary-100 rounded-full p-2"
            href={`/admin/recipes/${recipe.id}`}
          >
            <Icon className="w-4 h-4" name="edit" />
          </Link>
          <div className="flex flex-col absolute right-0 bottom-0 left-0">
            <Title className="opacity-80 bg-primary-900 text-primary-100 p-4 m-0">
              {recipe.title}
            </Title>
            <div className="opacity-90 bg-primary-900 text-primary-100 p-4 px-4 py-2">
              <Markdown>{recipe.description}</Markdown>
            </div>
          </div>

          <Image
            className="max-h-64 sm:max-h-96 object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4">
          <span className="uppercase text-primary-500 font-semibold">
            ingredients
          </span>
          <Markdown>{recipe.ingredients}</Markdown>
        </div>

        <div className="bg-white p-4">
          <span className="uppercase text-primary-500 font-semibold">
            instructions
          </span>
          <Markdown>{recipe.instructions}</Markdown>
        </div>
      </div>
    </div>
  )
}

// TODO: not working ? what is this ?
// export async function generateStaticParams() {
//   const recipes = await getRecipes()
//   return recipes.map((recipe) => ({ params: { slug: recipe.id.toString() } }))
// }
