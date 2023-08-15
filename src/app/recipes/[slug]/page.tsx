import Link from "@/components/ui/link"
import { getRecipe } from "@/data/recipe-service"

export default async function Recipes({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getRecipe(+params.slug)
  if (!data) return null

  return (
    <div>
      <Link href={`/recipes/${data.id}/edit`}>Edit</Link>
      <pre className="flex flex-col items-center justify-center">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
