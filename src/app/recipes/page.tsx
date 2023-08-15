import Card from "@/components/ui/card"
import { getRecipes } from "@/data/recipe-service"

export default async function Recipes() {
  const recipes = await getRecipes()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          image={recipe.image}
          href={`/recipes/${recipe.id}`}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </div>
  )
}
