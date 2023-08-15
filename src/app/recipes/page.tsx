import Card from "@/components/ui/card"
import Title from "@/components/ui/title"
import { getRecipes } from "@/data/recipe-service"

export default async function Recipes() {
  const recipes = await getRecipes()

  return (
    <>
      <div>
        {/* // TODO: create a session storage list of recently visited recipes */}
        <Title type="h2">Nylig besøkt</Title>
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
        <Title type="h2">Promotert</Title>
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
        <Title type="h2">Arkivet</Title>
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
    </>
  )
}
