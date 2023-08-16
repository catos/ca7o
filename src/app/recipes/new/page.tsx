import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getRecipe, updateRecipe } from "@/data/recipe-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"
import Title from "@/components/ui/title"

// TODO: add more details to this page
export default async function NewRecipe({
  params,
}: {
  params: { slug: string }
}) {
  async function create(formData: FormData) {
    "use server"

    // TODO: any way to simplify and validate this? zod ?
    const title = formData.get("title")
    if (!title || typeof title !== "string") {
      return
    }

    const image = formData.get("image")
    if (!image || typeof image !== "string") {
      return
    }

    const description = formData.get("description")
    if (!description || typeof description !== "string") {
      return
    }

    const ingredients = formData.get("ingredients")
    if (!ingredients || typeof ingredients !== "string") {
      return
    }

    const instructions = formData.get("instructions")
    if (!instructions || typeof instructions !== "string") {
      return
    }

    // await createRecipe({
    //   title,
    //   image,
    //   description,
    //   ingredients,
    //   instructions,
    // })

    // revalidatePath(`/recipes/${recipe.id}/edit`)
    // redirect(`/recipes/${recipe.id}`)
  }

  return (
    <form
      className="relative flex flex-col gap-4 w-full bg-white shadow-md rounded px-8 py-8 mb-4"
      action={create}
    >
      <Title>Create recipe</Title>
      <Input
        required
        id="title"
        type="text"
        name="title"
        label="Title"
        defaultValue=""
      />
      <Input
        required
        id="image"
        type="text"
        name="image"
        label="Image"
        defaultValue=""
      />
      <Textarea
        required
        id="description"
        name="description"
        label="Description"
        defaultValue=""
      />

      <div className="grid grid-cols-2 gap-8">
        <Textarea
          required
          id="ingredients"
          name="ingredients"
          label="Ingredients"
          defaultValue=""
        />
        <Textarea
          required
          id="instructions"
          name="instructions"
          label="Instructions"
          defaultValue=""
        />
      </div>

      <div className="flex gap-8 items-center justify-between absolute right-8 top-8">
        <Button type="submit">Save</Button>
        <Link className="no-underline font-bold" href={`/recipes`}>
          Cancel
        </Link>
      </div>
    </form>
  )
}
