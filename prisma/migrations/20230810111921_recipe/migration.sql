-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "ingredients" TEXT,
    "instructions" TEXT,
    "authorId" INTEGER,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
