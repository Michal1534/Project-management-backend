/*
  Warnings:

  - Added the required column `project_id` to the `Vacation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vacation" ADD COLUMN     "project_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Vacation" ADD CONSTRAINT "Vacation_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
