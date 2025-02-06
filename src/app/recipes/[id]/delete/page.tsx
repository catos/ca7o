import { deleteRecipe, getRecipe } from "@/data/recipe.actions"

import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

type Props = {
  params: { id: string }
}

export default async function DeleteRecipe({ params }: Props) {
  const recipeId = params.id

  const recipe = await getRecipe(recipeId)
  if (!recipe) {
    return null
  }

  return (
    <form
      className="relative justify-center flex flex-col gap-4 w-full  shadow-md rounded px-8 py-8 mb-4"
      action={deleteRecipe}
    >
      <input type="hidden" name="id" value={recipe.id} />

      <h1 className="m-0">Delete recipe: &quot;{recipe.title}&quot; ?</h1>

      <div className="flex gap-8 items-center justify-between">
        <Button type="submit">Delete</Button>
        <Link className="no-underline font-bold" href={`/recipes/${recipeId}`}>
          Cancel
        </Link>
      </div>
    </form>
  )
}
