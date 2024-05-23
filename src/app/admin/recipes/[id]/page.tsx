import { notFound } from "next/navigation"

import { getRecipe, updateRecipe } from "@/data/recipe.actions"

import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"

type Props = {
  params: { id: string }
}

export default async function EditRecipePage({ params }: Props) {
  const recipe = await getRecipe(+params.id)
  if (!recipe) {
    notFound()
  }

  return (
    <form
      className="relative flex flex-col gap-4 p-4 h-full"
      action={updateRecipe}
    >
      <div className="flex gap-4 items-center">
        <Button type="submit">Save</Button>
        <Link
          className="no-underline font-bold"
          href={`/admin/recipes/${recipe.id}/delete`}
        >
          Delete
        </Link>
      </div>

      <div className="flex gap-4">
        <span>
          <strong>Created: </strong>
          {recipe.created_at.toLocaleString()}
        </span>
        <span>
          <strong>Updated: </strong>
          {recipe.updated_at?.toLocaleString()}
        </span>
      </div>

      <input type="hidden" name="id" value={recipe.id} />

      <Input
        required
        id="title"
        type="text"
        name="title"
        label="Title"
        defaultValue={recipe.title}
      />
      <Input
        required
        id="image"
        type="text"
        name="image"
        label="Image"
        defaultValue={recipe.image}
      />
      <Textarea
        required
        id="description"
        name="description"
        label="Description"
        defaultValue={recipe.description ?? ""}
      />

      <div className="grid grid-cols-2 gap-8 h-96">
        <Textarea
          required
          id="ingredients"
          name="ingredients"
          label="Ingredients"
          defaultValue={recipe.ingredients ?? ""}
        />
        <Textarea
          required
          id="instructions"
          name="instructions"
          label="Instructions"
          defaultValue={recipe.instructions ?? ""}
        />
      </div>
    </form>
  )
}
