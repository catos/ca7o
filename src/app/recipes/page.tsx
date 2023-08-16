import { getRecipes } from "@/data/recipe-service"

import Card from "@/components/ui/card"
import Title from "@/components/ui/title"

export default async function Recipes() {
  const recipes = await getRecipes()

  return (
    <div className="flex flex-col gap-4">
      {/* // TODO: create a session storage list of recently visited recipes */}
      <div>
        <Title type="h2" className="mb-0 text-lg uppercase text-primary-600">
          Nylig besøkt
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
      <div>
        <Title type="h2" className="mb-0 text-lg uppercase text-primary-600">
          Promotert
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

      <div>
        <Title type="h2" className="mb-0 text-lg uppercase text-primary-600">
          Arkivet
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
