import { RecipeForm } from "@/components/recipe/recipe-form"
import { getRecipe, updateRecipe } from "@/data/recipe.actions"

export default async function Edit({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id)

  if (!recipe) {
    return null
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col justify-end text-muted md:flex-row md:gap-4">
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
    </div>
  )
}
