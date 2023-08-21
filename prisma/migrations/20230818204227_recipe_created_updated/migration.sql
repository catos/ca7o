/*
  Warnings:

  - Made the column `image` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "image" SET NOT NULL;
