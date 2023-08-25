import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"
import Title from "@/components/ui/title"

import { create } from "../actions"

export default async function CreateRecipe() {
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
        defaultValue="https://placehold.co/600x400"
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
