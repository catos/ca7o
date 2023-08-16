import Icon from "@/components/icon"
import Image from "@/components/image"
import Markdown from "@/components/markdown"

import { getRecipe } from "@/data/recipe-service"

import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

export default async function Recipes({
  params,
}: {
  params: { slug: string }
}) {
  const recipe = await getRecipe(+params.slug)
  if (!recipe) return null

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="relative">
          <Link
            className="absolute top-2 right-2 no-underline font-bold opacity-60 bg-primary-900 text-primary-100 rounded-full p-2"
            href={`/recipes/${recipe.id}/edit`}
          >
            <Icon name="edit" />
          </Link>
          <Title
            className="absolute right-0 bottom-0 left-0 opacity-80 bg-primary-900 text-primary-100 p-4"
            noMargin
          >
            {recipe.title}
          </Title>

          <Image
            className="max-h-64 sm:max-h-96 object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <div className="bg-primary-900 text-primary-100 px-4 py-2">
          <Markdown>{recipe.description}</Markdown>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div>
          <span className="uppercase text-primary-500 font-semibold">
            ingredients
          </span>
          <Markdown>{recipe.ingredients}</Markdown>
        </div>

        <div>
          <span className="uppercase text-primary-500 font-semibold">
            instructions
          </span>
          <Markdown>{recipe.instructions}</Markdown>
        </div>
      </div>
    </div>
  )
}
