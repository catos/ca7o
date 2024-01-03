/*
  Warnings:

  - You are about to drop the column `done` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "done",
ADD COLUMN     "state" INTEGER NOT NULL DEFAULT 0;
