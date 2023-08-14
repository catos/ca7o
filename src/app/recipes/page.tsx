import { getRecipes } from "@/data/recipe-service"

import RecipeCard from "./recipe-card"

export default async function Recipes() {
  const recipes = await getRecipes()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
