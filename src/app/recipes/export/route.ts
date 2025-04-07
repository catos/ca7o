import { getRecipes } from "@/data/recipe.actions"

export async function GET(request: Request) {
  const recipes = await getRecipes()
  return Response.json(recipes)
}
