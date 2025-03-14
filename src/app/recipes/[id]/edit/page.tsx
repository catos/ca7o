import { getRecipe, updateRecipe } from "@/data/recipe.actions"
import { RecipeForm } from "@/components/recipe/recipe-form"

type Props = {
  params: Promise<{ id: string }>
}

export default async function Edit({ params }: Props) {
  const { id } = await params
  const recipe = await getRecipe(id)

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
