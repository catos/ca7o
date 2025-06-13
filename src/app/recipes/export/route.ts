import { getRecipes } from "@/data/recipe.actions"

export async function GET() {
  const recipes = await getRecipes()
  return Response.json(recipes)
}
