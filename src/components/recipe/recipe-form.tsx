"use client"

import { Tables } from "@/types/database"
import { CookingPotIcon } from "lucide-react"
import { Form } from "radix-ui"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "../ui/link"
import { DeleteButton } from "./delete-button"
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
  const data = { ...defaultValues, ...recipe }

  return (
    <Form.Root className="relative flex flex-col gap-4" action={action}>
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

      <Textarea
        required
        id="description"
        name="description"
        label="Description"
        defaultValue={data.description ?? ""}
        className="h-16"
      />

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="basis-1/2">
          <Textarea
            required
            id="ingredients"
            name="ingredients"
            label="Ingredients"
            className="h-48 md:h-96"
            defaultValue={data.ingredients}
          />
        </div>

        <div className="basis-1/2">
          <Textarea
            required
            id="instructions"
            name="instructions"
            label="Instructions"
            className="h-48 md:h-96"
            defaultValue={data.instructions}
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        {recipe && (
          <>
            <DeleteButton id={recipe.id} />
            <Link className="ml-auto flex gap-2" href={`/recipes/${recipe.id}`}>
              <CookingPotIcon /> Go to recipe
            </Link>
          </>
        )}

        <SubmitButton>Save</SubmitButton>
      </div>
    </Form.Root>
  )
}
