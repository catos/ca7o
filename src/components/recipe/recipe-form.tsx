"use client"

import Label from "@/components/ui/label"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"
import { Tables } from "@/types/database"
import Input from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import { SubmitButton } from "./submit-button"

type Props = {
  action: (formData: FormData) => void
  recipe?: Tables<"recipes">
}

export function RecipeForm({ action, recipe }: Props) {
  const { pending } = useFormStatus()
  console.log("pending", pending)
  const defaultValues = {
    title: "TODO: Default title for testing!",
    image: "https://placehold.co/600x400",
    description: "...",
    ingredients: "...",
    instructions: "...",
  }
  const data = { ...recipe, ...defaultValues }

  return (
    <form className="relative flex flex-col gap-4 p-4 h-full" action={action}>
      <div className="flex gap-4 items-center">
        <SubmitButton>Save</SubmitButton>

        {recipe && (
          <>
            <Link href={`/recipes/${recipe.id}`}>Go to recipe</Link>
            <Link
              className="no-underline font-bold ml-auto"
              href={`/admin/recipes/${recipe.id}/delete`}
            >
              Delete
            </Link>
          </>
        )}
      </div>

      {recipe && (
        <div className="flex gap-4">
          <span>
            <strong>Created: </strong>
            {recipe.created_at.toLocaleString()}
          </span>
          <span>
            <strong>Updated: </strong>
            {recipe.updated_at?.toLocaleString()}
          </span>
          <input type="hidden" name="id" value={recipe.id} />
        </div>
      )}

      <Input
        required
        id="title"
        type="text"
        name="title"
        label="Title"
        defaultValue={data.title}
      />
      <Input
        required
        id="image"
        type="text"
        name="image"
        label="Image"
        defaultValue={data.image}
      />

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          required
          id="description"
          name="description"
          defaultValue={data.description}
          className="h-24"
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="basis-1/2">
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea
            required
            id="ingredients"
            name="ingredients"
            defaultValue={data.ingredients}
          />
        </div>

        <div className="basis-1/2">
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea
            required
            id="instructions"
            name="instructions"
            defaultValue={data.instructions}
          />
        </div>
      </div>
    </form>
  )
}
