import { RecipeForm } from "@/components/recipe/recipe-form"
import Link from "@/components/ui/link"
import { getRecipe, updateRecipe } from "@/data/recipe.actions"

export default async function Edit({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id)

  if (!recipe) {
    return null
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <Link href={`/recipes/${recipe.id}`}>Go to recipe</Link>
        <Link
          className="no-underline font-bold ml-auto"
          href={`/recipes/${recipe.id}/delete`}
        >
          Delete
        </Link>
      </div>

      <div className="flex gap-4">
        <span>
          <strong>Created: </strong>
          {recipe.created_at.toLocaleString()}
        </span>
        <span>
          <strong>Updated: </strong>
          {recipe.updated_at?.toLocaleString()}
        </span>
      </div>

      <RecipeForm action={updateRecipe} recipe={recipe} />
    </>
  )
}
