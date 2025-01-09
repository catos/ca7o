"use client"

import { Label } from "@/components/ui/label"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"
import { Tables } from "@/types/database"
import Input from "@/components/ui/input"
import { SubmitButton } from "./submit-button"

type Props = {
  action: (formData: FormData) => void
  recipe?: Tables<"recipes">
}

export function RecipeForm({ action, recipe }: Props) {
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
      {recipe && <input type="hidden" name="id" value={recipe.id} />}

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

      <div className="ml-auto">
        <SubmitButton>Save</SubmitButton>
      </div>
    </form>
  )
}
