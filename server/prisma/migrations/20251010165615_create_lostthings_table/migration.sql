-- CreateTable
CREATE TABLE "lostThings" (
    "id" TEXT NOT NULL,
    "founderId" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "foundDate" TIMESTAMP(3) NOT NULL,
    "image" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lostThings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lostThings_founderId_key" ON "lostThings"("founderId");

-- AddForeignKey
ALTER TABLE "lostThings" ADD CONSTRAINT "lostThings_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
