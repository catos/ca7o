import { CirclePlusIcon } from "lucide-react"
import { getRecipes } from "@/data/recipe.actions"
import { Link } from "@/components/ui/link"
import Card from "@/components/recipe/card"

export const revalidate = 3600

export default async function RecipesPage() {
  const recipes = await getRecipes()

  if (!recipes) {
    return (
      <div className="relative flex flex-col gap-4">
        <h1>No recipes found... try adding one ?</h1>
      </div>
    )
  }

  return (
    <>
      <section className="flex">
        <Link className="ml-auto" href="/recipes/create">
          <CirclePlusIcon />
        </Link>
      </section>

      {/* // TODO: create a session storage list of recently visited recipes */}
      <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            image={recipe.image}
            href={`/recipes/${recipe.id}`}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </section>
    </>
  )
}
