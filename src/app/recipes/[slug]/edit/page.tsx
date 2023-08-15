import { revalidatePath } from "next/cache"

import { getRecipe, updateRecipe } from "@/data/recipe-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Title from "@/components/ui/title"

// TODO: add more details to this page
export default async function EditRecipe({
  params,
}: {
  params: { slug: string }
}) {
  const recipe = await getRecipe(+params.slug)

  if (!recipe) return null

  async function update(formData: FormData) {
    "use server"

    if (!recipe) return

    const title = formData.get("title")
    if (!title || typeof title !== "string") {
      return
    }

    await updateRecipe(recipe?.id, { title })
    revalidatePath(`/recipes/${recipe.id}/edit`)
  }

  return (
    <form className="mx-auto w-1/2 border mt-4 p-4 rounded" action={update}>
      <Title>Edit recipe: {recipe.title}</Title>
      <Input
        required
        id="title"
        type="text"
        name="title"
        defaultValue={recipe.title}
      />
      <Button type="submit">Save</Button>
    </form>
  )
}
