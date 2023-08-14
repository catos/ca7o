import Image from "@/components/image"
import { Recipe } from "@prisma/client"
import Link from "next/link"

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <Image src={recipe.image} alt={recipe.title} />
      <div className="px-6 py-4">
        <Link className="font-bold text-xl mb-2" href={`/recipes/${recipe.id}`}>
          {recipe.title}
        </Link>
        <p className="text-gray-700 text-base">{recipe.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #enkel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #kjapp
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #sunn
        </span>
      </div>
    </div>
  )
}
