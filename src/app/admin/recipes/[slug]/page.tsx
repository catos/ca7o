import { notFound } from "next/navigation"

import { getRecipe } from "@/data/recipe-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"

import { update, updateAndClose } from "../actions"

interface IProps {
  params: { slug: string }
}

export default async function EditRecipePage({ params }: IProps) {
  const recipe = await getRecipe(+params.slug)

  if (!recipe) {
    notFound()
  }

  return (
    <form className="relative flex flex-col gap-4 p-4 mb-4" action={update}>
      <div className="flex gap-8 items-center">
        <Button type="submit">Save & Continue</Button>
        <Button formAction={updateAndClose}>Save & Close</Button>
        <Link
          className="no-underline font-bold"
          href={`/admin/recipes/${recipe.id}/delete`}
        >
          Delete
        </Link>
      </div>

      <Input id="id" type="hidden" name="id" defaultValue={recipe.id} />

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

      <div className="grid grid-cols-2 gap-8">
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
