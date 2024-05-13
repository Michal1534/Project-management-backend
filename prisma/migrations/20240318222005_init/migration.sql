/*
  Warnings:

  - You are about to drop the column `number` on the `Sprint` table. All the data in the column will be lost.
  - Added the required column `name` to the `Sprint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sprint" DROP COLUMN "number",
ADD COLUMN     "name" TEXT NOT NULL;
