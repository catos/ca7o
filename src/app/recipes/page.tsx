import Icon from "@/components/icon"

import { getRecipes } from "@/data/recipe-service"

import Card from "@/components/ui/card"
import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

export default async function Recipes() {
  const recipes = await getRecipes()

  return (
    <div className="relative flex flex-col gap-4">
      <Link
        className="absolute top-2 right-2 no-underline font-bold opacity-60 bg-primary-900 text-primary-100 rounded-full p-2"
        href={`/recipes/create`}
      >
        <Icon name="create" />
      </Link>

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
