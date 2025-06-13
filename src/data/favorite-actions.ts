export default {}
// "use server"

// import prisma from "@/lib/prisma"
// import { getServerSession } from "next-auth"
// import { revalidatePath } from "next/cache"

// export async function createFavorite(recipeId: number, userId: number) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     throw new Error("Not authenticated")
//   }

//   // TODO: check if favorite already exists
//   const data = {
//     recipeId: +recipeId,
//     userId: +userId,
//   }

//   try {
//     await prisma.favorite.create({ data })
//   } catch (error) {
//     throw new Error("Database error. Failed to create favorite.")
//   }

//   revalidatePath(`/recipes/${recipeId}`)
// }

// export async function deleteFavorite(recipeId: number, favoriteId: number) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     throw new Error("Not authenticated")
//   }

//   console.log("delete fav: ", favoriteId)

//   try {
//     await prisma.favorite.delete({
//       where: {
//         id: +favoriteId,
//       },
//     })
//   } catch (error) {
//     throw new Error("Database error. Failed to delete favorite.")
//   }

//   revalidatePath(`/recipes/${recipeId}`)
// }
