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
    <div>
      <Link href={`/recipes/${recipe.id}/edit`}>Edit</Link>
      <Title>{recipe.title}</Title>
      {/* <Image src={recipe.image} alt={recipe.title} /> */}

      <label>description</label>
      <Markdown>{recipe.description}</Markdown>

      <div className="grid md:grid-cols-2">
        <div>
          <label>ingredients</label>
          <Markdown>{recipe.ingredients}</Markdown>
        </div>

        <div>
          <label>instructions</label>
          <Markdown>{recipe.instructions}</Markdown>
        </div>
      </div>
    </div>
  )
}
