import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getRecipe, updateRecipe } from "@/data/recipe-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"

interface IProps {
  params: { slug: string }
}

export default async function EditRecipePage({ params }: IProps) {
  const recipe = await getRecipe(+params.slug)

  if (!recipe) return null

  async function update(formData: FormData) {
    "use server"

    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      throw new Error("Not authenticated")
    }

    if (!recipe) {
      throw new Error("Recipe not found")
    }

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
      // TODO: make this work ? (and error.tsx)
      throw new Error("Description is required!")
    }

    const ingredients = formData.get("ingredients")
    if (!ingredients || typeof ingredients !== "string") {
      return
    }

    const instructions = formData.get("instructions")
    if (!instructions || typeof instructions !== "string") {
      return
    }

    await updateRecipe(recipe.id, {
      title,
      image,
      description,
      ingredients,
      instructions,
    })

    revalidatePath(`/recipes/${recipe.id}/edit`)
    redirect(`/recipes/${recipe.id}`)
  }

  return (
    <form className="relative flex flex-col gap-4 p-4 mb-4" action={update}>
      <div className="flex gap-8 items-center">
        <Button type="submit">Save</Button>
        <Link className="no-underline font-bold" href={`/recipes/${recipe.id}`}>
          Recipe
        </Link>
      </div>

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
