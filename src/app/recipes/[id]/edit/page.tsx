import { SubmitButton } from "@/components/recipe/submit-button"
import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import Link from "@/components/ui/link"
import Textarea from "@/components/ui/textarea"
import { getRecipe, updateRecipe } from "@/data/recipe.actions"

export default async function Edit({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id)

  if (!recipe) {
    return null
  }

  return (
    <form
      className="relative flex flex-col gap-4 p-4 h-full"
      action={updateRecipe}
    >
      <div className="flex gap-4 items-center">
        <SubmitButton>Update recipe</SubmitButton>
        <Link href={`/recipes/${recipe.id}`}>Go to recipe</Link>
        <Link
          className="no-underline font-bold ml-auto"
          href={`/admin/recipes/${recipe.id}/delete`}
        >
          Delete
        </Link>
      </div>

      <div className="flex gap-4">
        <span>
          <strong>Created: </strong>
          {recipe.created_at.toLocaleString()}
        </span>
        <span>
          <strong>Updated: </strong>
          {recipe.updated_at?.toLocaleString()}
        </span>
      </div>

      <input type="hidden" name="id" value={recipe.id} />

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

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          required
          id="description"
          name="description"
          defaultValue={recipe.description ?? ""}
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
            defaultValue={recipe.ingredients ?? ""}
          />
        </div>

        <div className="basis-1/2">
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea
            required
            id="instructions"
            name="instructions"
            defaultValue={recipe.instructions ?? ""}
          />
        </div>
      </div>
    </form>
  )
}
