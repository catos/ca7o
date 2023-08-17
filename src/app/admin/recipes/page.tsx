import Icon from "@/components/icon"

import { getRecipes } from "@/data/recipe-service"

import Card from "@/components/ui/card"
import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

// TODO: can I set this more globally ?
export const revalidate = 10

export default async function RecipesPage() {
  const recipes = await getRecipes()

  return (
    <div className="relative flex flex-col gap-4">
      {/* // TODO: create a session storage list of recently visited recipes */}
      <div>
        <Title type="h2" className="mb-0 text-lg uppercase text-primary-600">
          Recipes...
        </Title>
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
      </div>
    </div>
  )
}
