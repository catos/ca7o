import toLocaleDate from "@/lib/to-locale-date"

import { getRecipes } from "@/data/recipe.actions"

import Heading from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function RecipesPage() {
  const recipes = await getRecipes()

  if (!recipes) {
    return null
  }

  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex items-center">
        <Heading as="h2" className="mb-0 text-lg uppercase">
          Recipes
        </Heading>
        <Button size="sm" variant="default" asChild className="ml-auto">
          <Link href="/admin/recipes/create">Create New</Link>
        </Button>
      </div>

      {/* TODO: https://ui.shadcn.com/docs/components/table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4 text-right">Created</th>
            <th className="p-4 text-right">Updated</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id} className="bg-white border-b hover:bg-gray-50">
              <td>
                <Link className="p-4 flex" href={`/admin/recipes/${recipe.id}`}>
                  {recipe.title}
                </Link>
              </td>
              <td className="p-4 text-right">
                {toLocaleDate(recipe.created_at)}
              </td>
              <td className="p-4 text-right">
                {toLocaleDate(recipe.updated_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
