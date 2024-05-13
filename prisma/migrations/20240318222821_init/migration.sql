/*
  Warnings:

  - Added the required column `component` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "component" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
