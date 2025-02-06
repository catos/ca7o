"use client"

import { Textarea } from "@/components/ui/textarea"
import { Tables } from "@/types/database"
import { Input } from "@/components/ui/input"
import { SubmitButton } from "./submit-button"
import { Link } from "../ui/link"
import { CookingPotIcon, XIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

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
  const data = { ...defaultValues, ...recipe }
  const router = useRouter()

  return (
    <form className="relative flex flex-col gap-4" action={action}>
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
        <label htmlFor="description">Description</label>
        <Textarea
          required
          id="description"
          name="description"
          defaultValue={data.description ?? ""}
          className="h-24"
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="basis-1/2">
          <label htmlFor="ingredients">Ingredients</label>
          <Textarea
            required
            id="ingredients"
            name="ingredients"
            className="h-48"
            defaultValue={data.ingredients}
          />
        </div>

        <div className="basis-1/2">
          <label htmlFor="instructions">Instructions</label>
          <Textarea
            required
            id="instructions"
            name="instructions"
            className="h-48"
            defaultValue={data.instructions}
          />
        </div>
      </div>

      <div className="flex gap-8 items-center">
        {recipe && (
          <>
            <Link
              className="flex gap-2 text-destructive"
              href={`/recipes/${recipe.id}/delete`}
            >
              <XIcon /> Delete
            </Link>
            <Link className="flex gap-2 ml-auto" href={`/recipes/${recipe.id}`}>
              <CookingPotIcon /> Go to recipe
            </Link>
          </>
        )}

        <SubmitButton>Save</SubmitButton>
      </div>
    </form>
  )
}
