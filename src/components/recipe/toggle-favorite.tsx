"use client"

import { createFavorite, deleteFavorite } from "@/data/favorite-actions"
import { Recipe } from "@prisma/client"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip"
import { StarIcon } from "lucide-react"
import { useSession } from "next-auth/react"

export default function ToggleFavorite({ recipe }: { recipe: Recipe }) {
  const { data: session, status } = useSession()

  const favoriteId = recipe.favorites.find(
    (p) => p.userId === +session?.user.id
  )
  const isFavorite = Boolean(favoriteId)

  console.log(recipe.favorites, session?.user.id, status, favoriteId)

  const toggleFavorite = () => {
    if (status === "authenticated") {
      favoriteId
        ? deleteFavorite(recipe.id, favoriteId)
        : createFavorite(recipe.id, session?.user?.id)
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger
        disabled={status !== "authenticated"}
        onClick={toggleFavorite}
      >
        {isFavorite ? <StarIcon fill="primary" /> : <StarIcon />}
      </TooltipTrigger>
      <TooltipContent>
        {isFavorite ? <p>Fjern favoritt</p> : <p>Legg til som favoritt</p>}
      </TooltipContent>
    </Tooltip>
  )
}
