import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createRecipe, getRecipe, updateRecipe } from "@/data/recipe-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"
import Title from "@/components/ui/title"

export default async function CreateRecipe() {
  async function create(formData: FormData) {
    "use server"

    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      throw new Error("Not authenticated")
    }

    // TODO: any way to simplify and validate this? zod ?
    const title = formData.get("title")
    if (!title || typeof title !== "string") {
      throw new Error("Title is required")
    }

    const image = formData.get("image")
    if (!image || typeof image !== "string") {
      throw new Error("Image is required")
    }

    const description = formData.get("description")
    if (!description || typeof description !== "string") {
      throw new Error("Description is required")
    }

    const ingredients = formData.get("ingredients")
    if (!ingredients || typeof ingredients !== "string") {
      throw new Error("Ingredients is required")
    }

    const instructions = formData.get("instructions")
    if (!instructions || typeof instructions !== "string") {
      throw new Error("Instructions is required")
    }

    const recipe = await createRecipe({
      authorId: session.user.id,
      title,
      image,
      description,
      ingredients,
      instructions,
    })

    if (!recipe) {
      throw new Error("Failed to create recipe")
    }

    // TODO: review all revalidatePath
    revalidatePath(`/recipes/${recipe.id}`)
    redirect(`/recipes/${recipe.id}`)
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
        defaultValue="Test recipe"
      />
      <Input
        required
        id="image"
        type="text"
        name="image"
        label="Image"
        defaultValue="http://image.lol.com.org/image.jpg"
      />
      <Textarea
        required
        id="description"
        name="description"
        label="Description"
        defaultValue="Description of the recipe"
      />

      <div className="grid grid-cols-2 gap-8">
        <Textarea
          required
          id="ingredients"
          name="ingredients"
          label="Ingredients"
          defaultValue="Ingredients of the recipe"
        />
        <Textarea
          required
          id="instructions"
          name="instructions"
          label="Instructions"
          defaultValue="Instructions of the recipe"
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
