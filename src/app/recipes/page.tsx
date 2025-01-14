import Card from "@/components/recipe/card"

import { getRecipes } from "@/data/recipe.actions"

import { Heading } from "@/components/ui/heading"
import { Link } from "@/components/ui/link"

// TODO: can I set this more globally ?
export const revalidate = 10

export default async function RecipesPage() {
  const recipes = await getRecipes()

  if (!recipes) {
    return (
      <div className="relative flex flex-col gap-4">
        <Heading>No recipes found... try adding one ?</Heading>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col gap-4">
      <Link href="/recipes/create">Create recipe</Link>
      {/* // TODO: create a session storage list of recently visited recipes */}
      <div>
        <Heading as="h2" className="mb-0 text-lg uppercase text-foreground/50">
          Favoritter
        </Heading>
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
        <Heading as="h2" className="mb-0 text-lg uppercase text-foreground/50">
          Nylig lagt til
        </Heading>
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
        <Heading as="h2" className="mb-0 text-lg uppercase text-foreground/50">
          Anbefalt
        </Heading>
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
