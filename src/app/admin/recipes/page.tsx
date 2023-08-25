import Icon from "@/components/icon"
import toLocaleDate from "@/lib/to-locale-date"

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

        <Link href="/admin/recipes/create">Create New</Link>
        {/* TODO: move styling to global.css or ui components */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">Created</th>
              <th className="p-4">Updated</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr
                key={recipe.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <Link href={`/admin/recipes/${recipe.id}`}>
                    {recipe.title}
                  </Link>
                </td>
                <td className="px-6 py-4">{recipe.author?.name}</td>
                <td className="px-6 py-4">{toLocaleDate(recipe.createdAt)}</td>
                <td className="px-6 py-4">{toLocaleDate(recipe.updatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
