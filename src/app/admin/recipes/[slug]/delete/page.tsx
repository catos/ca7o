import { deleteRecipe, getRecipe } from "@/data/recipe-actions"

import Button from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"

type Props = {
  params: { slug: string }
}

export default async function DeleteRecipe({ params }: Props) {
  const recipeId = +params.slug

  const recipe = await getRecipe(recipeId)
  if (!recipe) return null

  return (
    <form
      className="relative justify-center flex flex-col gap-4 w-full bg-white shadow-md rounded px-8 py-8 mb-4"
      action={deleteRecipe}
    >
      <input type="hidden" name="id" value={recipe.id} />

      <Heading className="m-0">Delete recipe: {recipe.title} ?</Heading>

      <div className="flex gap-8 items-center justify-between absolute right-8 top-8">
        <Button type="submit">Delete</Button>
        <Link
          className="no-underline font-bold"
          href={`/admin/recipes/${recipeId}`}
        >
          Cancel
        </Link>
      </div>
    </form>
  )
}
