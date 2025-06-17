import { deleteRecipe, getRecipe } from "@/data/recipe.actions"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

type Props = {
  params: Promise<{ id: string }>
}

export default async function DeleteRecipe({ params }: Props) {
  const { id } = await params
  const recipe = await getRecipe(id)

  if (!recipe) {
    return null
  }

  return (
    <form
      className="relative mb-4 flex w-full flex-col justify-center gap-4 rounded px-8 py-8 shadow-md"
      action={deleteRecipe}
    >
      <input type="hidden" name="id" value={recipe.id} />

      <h1 className="m-0">Delete recipe: &quot;{recipe.title}&quot; ?</h1>

      <div className="flex items-center justify-between gap-8">
        <Button type="submit">Delete</Button>
        <Link className="no-underline" href={`/recipes/${id}`}>
          Cancel
        </Link>
      </div>
    </form>
  )
}
