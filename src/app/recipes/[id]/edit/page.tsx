import { RecipeForm } from "@/components/recipe/recipe-form"
import { getRecipe, updateRecipe } from "@/data/recipe.actions"

export default async function Edit({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id)

  if (!recipe) {
    return null
  }

  return <RecipeForm action={updateRecipe} recipe={recipe} />
}
