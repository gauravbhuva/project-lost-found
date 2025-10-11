/*
  Warnings:

  - Added the required column `location` to the `lostThings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lostThings" ADD COLUMN     "location" TEXT NOT NULL;
