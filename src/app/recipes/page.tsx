import Card from "@/components/recipe/card"

import { getRecipes } from "@/data/recipe-actions"

import Title from "@/components/ui/title"

// TODO: can I set this more globally ?
export const revalidate = 10

export default async function RecipesPage() {
  const recipes = (await getRecipes()) ?? []

  return (
    <div className="relative flex flex-col gap-4">
      {/* // TODO: create a session storage list of recently visited recipes */}
      <div>
        <Title type="h2" className="mb-0 text-lg uppercase text-primary-600">
          Nylig besøkt
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
