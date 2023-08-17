import Icon from "@/components/icon"
import Image from "@/components/image"
import Markdown from "@/components/markdown"

import { getRecipe } from "@/data/recipe-service"

import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

interface IProps {
  params: { slug: string }
}

export default async function RecipesPage({ params }: IProps) {
  const recipe = await getRecipe(+params.slug)
  if (!recipe) return null

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="relative">
          <AdminActions recipeId={recipe.id} />
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

function AdminActions({ recipeId }: { recipeId: number }) {
  return (
    <div className="absolute top-2 right-2 no-underline flex flex-col gap-2">
      <Link
        className="font-bold opacity-60 bg-primary-900 text-primary-100 rounded-full p-2"
        href={`/recipes/${recipeId}/edit`}
      >
        <Icon name="edit" />
      </Link>
      <Link
        className="font-bold opacity-60 bg-primary-900 text-primary-100 rounded-full p-2"
        href={`/recipes/${recipeId}/delete`}
      >
        <Icon name="delete" />
      </Link>
    </div>
  )
}
