import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { deleteRecipe, getRecipe } from "@/data/recipe-service"

import Button from "@/components/ui/button"
import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

interface IProps {
  params: { slug: string }
}

export default async function DeleteRecipe({ params }: IProps) {
  const recipeId = +params.slug

  const recipe = await getRecipe(recipeId)
  if (!recipe) return null

  async function del() {
    "use server"

    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      throw new Error("Not authenticated")
    }

    if (!recipe) {
      throw new Error("Recipe not found")
    }

    await deleteRecipe(recipeId)

    revalidatePath(`/recipes/${recipeId}`)
    redirect(`/recipes/${recipeId}`)
  }

  return (
    <form
      className="relative justify-center flex flex-col gap-4 w-full bg-white shadow-md rounded px-8 py-8 mb-4"
      action={del}
    >
      <Title noMargin>Delete recipe: {recipe.title} ?</Title>

      <div className="flex gap-8 items-center justify-between absolute right-8 top-8">
        <Button type="submit">Delete</Button>
        <Link className="no-underline font-bold" href={`/recipes`}>
          Cancel
        </Link>
      </div>
    </form>
  )
}
