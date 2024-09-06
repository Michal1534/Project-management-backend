/*
  Warnings:

  - You are about to drop the column `position` on the `User` table. All the data in the column will be lost.
  - Added the required column `specialization` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "position",
ADD COLUMN     "specialization" TEXT NOT NULL;

UPDATE "User" SET "specialization" = 'default_specialization' WHERE "specialization" IS NULL;

-- Usuń wartość domyślną, aby kolumna była wymagana
ALTER TABLE "User" ALTER COLUMN "specialization" SET NOT NULL;