/*
  Warnings:

  - You are about to drop the column `data_rozpoczecia` on the `Sprint` table. All the data in the column will be lost.
  - You are about to drop the column `data_zakonczenia` on the `Sprint` table. All the data in the column will be lost.
  - You are about to drop the column `numer` on the `Sprint` table. All the data in the column will be lost.
  - You are about to drop the column `projekt_id` on the `Sprint` table. All the data in the column will be lost.
  - You are about to drop the `Komentarze` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Projekty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Urlopy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Uzytkownicy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Uzytkownicy_Projekty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Zadania` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `end_date` to the `Sprint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Sprint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Sprint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Sprint` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Komentarze" DROP CONSTRAINT "Komentarze_uzytkownik_id_fkey";

-- DropForeignKey
ALTER TABLE "Komentarze" DROP CONSTRAINT "Komentarze_zadanie_id_fkey";

-- DropForeignKey
ALTER TABLE "Sprint" DROP CONSTRAINT "Sprint_projekt_id_fkey";

-- DropForeignKey
ALTER TABLE "Urlopy" DROP CONSTRAINT "Urlopy_uzytkownik_id_fkey";

-- DropForeignKey
ALTER TABLE "Uzytkownicy_Projekty" DROP CONSTRAINT "Uzytkownicy_Projekty_projekt_id_fkey";

-- DropForeignKey
ALTER TABLE "Uzytkownicy_Projekty" DROP CONSTRAINT "Uzytkownicy_Projekty_uzytkownik_id_fkey";

-- DropForeignKey
ALTER TABLE "Zadania" DROP CONSTRAINT "Zadania_przypisany_uzytkownik_id_fkey";

-- DropForeignKey
ALTER TABLE "Zadania" DROP CONSTRAINT "Zadania_sprint_id_fkey";

-- DropForeignKey
ALTER TABLE "Zadania" DROP CONSTRAINT "Zadania_zgloszony_przez_uzytkownik_id_fkey";

-- AlterTable
ALTER TABLE "Sprint" DROP COLUMN "data_rozpoczecia",
DROP COLUMN "data_zakonczenia",
DROP COLUMN "numer",
DROP COLUMN "projekt_id",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "project_id" INTEGER NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Komentarze";

-- DropTable
DROP TABLE "Projekty";

-- DropTable
DROP TABLE "Urlopy";

-- DropTable
DROP TABLE "Uzytkownicy";

-- DropTable
DROP TABLE "Uzytkownicy_Projekty";

-- DropTable
DROP TABLE "Zadania";

-- CreateTable
CREATE TABLE "Projects" (
    "project_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "task_id" SERIAL NOT NULL,
    "sprint_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "task_type" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "story_points" INTEGER NOT NULL,
    "assigned_user_id" INTEGER NOT NULL,
    "reported_by_user_id" INTEGER NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "workload" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comment_content" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "Vacation" (
    "vacation_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacation_pkey" PRIMARY KEY ("vacation_id")
);

-- CreateTable
CREATE TABLE "UserProjects" (
    "user_project_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "UserProjects_pkey" PRIMARY KEY ("user_project_id")
);

-- AddForeignKey
ALTER TABLE "Sprint" ADD CONSTRAINT "Sprint_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_assigned_user_id_fkey" FOREIGN KEY ("assigned_user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_reported_by_user_id_fkey" FOREIGN KEY ("reported_by_user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_sprint_id_fkey" FOREIGN KEY ("sprint_id") REFERENCES "Sprint"("sprint_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacation" ADD CONSTRAINT "Vacation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProjects" ADD CONSTRAINT "UserProjects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProjects" ADD CONSTRAINT "UserProjects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;
