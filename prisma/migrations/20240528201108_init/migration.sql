/*
  Warnings:

  - The primary key for the `UserProjects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserProjects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserProjects" DROP CONSTRAINT "UserProjects_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserProjects_pkey" PRIMARY KEY ("user_id", "project_id");
