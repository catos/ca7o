import Icon from "@/components/icon"

import { getRecipes } from "@/data/recipe-service"

import Link from "@/components/ui/link"
import List from "@/components/ui/list"
import ListItem from "@/components/ui/list-item"
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
          <List>
            {recipes.map((recipe) => (
              <ListItem key={recipe.id}>
                <Link href={`/admin/recipes/${recipe.id}`}>{recipe.title}</Link>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  )
}
