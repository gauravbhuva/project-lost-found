/*
  Warnings:

  - Changed the type of `category` on the `lostThings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "category" AS ENUM ('electronics', 'books', 'id', 'keys', 'bags', 'accessories');

-- AlterTable
ALTER TABLE "lostThings" DROP COLUMN "category",
ADD COLUMN     "category" "category" NOT NULL;
