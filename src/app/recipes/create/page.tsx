import { createRecipe } from "@/data/recipe.actions"

import { RecipeForm } from "@/components/recipe/recipe-form"

export default async function CreateRecipe() {
  return <RecipeForm action={createRecipe} />
}
