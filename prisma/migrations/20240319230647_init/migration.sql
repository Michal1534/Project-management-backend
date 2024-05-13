/*
  Warnings:

  - You are about to drop the column `request_date` on the `Vacation` table. All the data in the column will be lost.
  - Added the required column `reason` to the `Vacation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vacation" DROP COLUMN "request_date",
ADD COLUMN     "reason" TEXT NOT NULL;
