import { Form } from "radix-ui"
import { createRecipeJSON } from "@/data/recipe.actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// #fetch https://www.matprat.no/oppskrifter/familien/k/kyllingwok-med-brokkoli/ read the recipe and convert it to json and match the following model definition interface IRecipe { title: string,  image: string,  description: string,  ingredients: string,  instructions: string } (do not include id). Convert html to markdown for ingredients, instructions and description

export default function CreateJSONRecipePage() {
  return (
    <Form.Root action={createRecipeJSON} method="POST">
      <Textarea required id="json" name="json" className="h-48" />
      <Button type="submit" className="mt-4">
        Create Recipe
      </Button>
    </Form.Root>
  )
}
