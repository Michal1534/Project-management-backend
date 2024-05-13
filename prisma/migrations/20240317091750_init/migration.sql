/*
  Warnings:

  - You are about to drop the `Measurement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Measurement" DROP CONSTRAINT "Measurement_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductUsers" DROP CONSTRAINT "ProductUsers_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductUsers" DROP CONSTRAINT "ProductUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_userId_fkey";

-- DropTable
DROP TABLE "Measurement";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductUsers";

-- DropTable
DROP TABLE "Recipe";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Workout";

-- CreateTable
CREATE TABLE "Projekty" (
    "projekt_id" SERIAL NOT NULL,
    "nazwa" TEXT NOT NULL,
    "opis" TEXT NOT NULL,
    "data_rozpoczecia" TIMESTAMP(3) NOT NULL,
    "data_zakonczenia" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Projekty_pkey" PRIMARY KEY ("projekt_id")
);

-- CreateTable
CREATE TABLE "Sprint" (
    "sprint_id" SERIAL NOT NULL,
    "projekt_id" INTEGER NOT NULL,
    "numer" INTEGER NOT NULL,
    "data_rozpoczecia" TIMESTAMP(3) NOT NULL,
    "data_zakonczenia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sprint_pkey" PRIMARY KEY ("sprint_id")
);

-- CreateTable
CREATE TABLE "Zadania" (
    "zadanie_id" SERIAL NOT NULL,
    "sprint_id" INTEGER NOT NULL,
    "opis" TEXT NOT NULL,
    "typ_zadania" TEXT NOT NULL,
    "priorytet" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "data_utworzenia" TIMESTAMP(3) NOT NULL,
    "story_pointy" INTEGER NOT NULL,
    "przypisany_uzytkownik_id" INTEGER NOT NULL,
    "zgloszony_przez_uzytkownik_id" INTEGER NOT NULL,

    CONSTRAINT "Zadania_pkey" PRIMARY KEY ("zadanie_id")
);

-- CreateTable
CREATE TABLE "Uzytkownicy" (
    "uzytkownik_id" SERIAL NOT NULL,
    "nazwa_uzytkownika" TEXT NOT NULL,
    "haslo_hash" TEXT NOT NULL,
    "imie" TEXT NOT NULL,
    "nazwisko" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "stanowisko" TEXT NOT NULL,
    "rola" TEXT NOT NULL,
    "dostepnosc" BOOLEAN NOT NULL,
    "obciazenie_pracy" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Uzytkownicy_pkey" PRIMARY KEY ("uzytkownik_id")
);

-- CreateTable
CREATE TABLE "Komentarze" (
    "komentarz_id" SERIAL NOT NULL,
    "zadanie_id" INTEGER NOT NULL,
    "uzytkownik_id" INTEGER NOT NULL,
    "tresc_komentarza" TEXT NOT NULL,
    "znacznik_czasu" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Komentarze_pkey" PRIMARY KEY ("komentarz_id")
);

-- CreateTable
CREATE TABLE "Urlopy" (
    "urlop_id" SERIAL NOT NULL,
    "uzytkownik_id" INTEGER NOT NULL,
    "data_rozpoczecia" TIMESTAMP(3) NOT NULL,
    "data_zakonczenia" TIMESTAMP(3) NOT NULL,
    "data_zgloszenia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Urlopy_pkey" PRIMARY KEY ("urlop_id")
);

-- CreateTable
CREATE TABLE "Uzytkownicy_Projekty" (
    "uzytkownik_projekt_id" SERIAL NOT NULL,
    "uzytkownik_id" INTEGER NOT NULL,
    "projekt_id" INTEGER NOT NULL,

    CONSTRAINT "Uzytkownicy_Projekty_pkey" PRIMARY KEY ("uzytkownik_projekt_id")
);

-- AddForeignKey
ALTER TABLE "Sprint" ADD CONSTRAINT "Sprint_projekt_id_fkey" FOREIGN KEY ("projekt_id") REFERENCES "Projekty"("projekt_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadania" ADD CONSTRAINT "Zadania_przypisany_uzytkownik_id_fkey" FOREIGN KEY ("przypisany_uzytkownik_id") REFERENCES "Uzytkownicy"("uzytkownik_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadania" ADD CONSTRAINT "Zadania_zgloszony_przez_uzytkownik_id_fkey" FOREIGN KEY ("zgloszony_przez_uzytkownik_id") REFERENCES "Uzytkownicy"("uzytkownik_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadania" ADD CONSTRAINT "Zadania_sprint_id_fkey" FOREIGN KEY ("sprint_id") REFERENCES "Sprint"("sprint_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentarze" ADD CONSTRAINT "Komentarze_zadanie_id_fkey" FOREIGN KEY ("zadanie_id") REFERENCES "Zadania"("zadanie_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentarze" ADD CONSTRAINT "Komentarze_uzytkownik_id_fkey" FOREIGN KEY ("uzytkownik_id") REFERENCES "Uzytkownicy"("uzytkownik_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Urlopy" ADD CONSTRAINT "Urlopy_uzytkownik_id_fkey" FOREIGN KEY ("uzytkownik_id") REFERENCES "Uzytkownicy"("uzytkownik_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Uzytkownicy_Projekty" ADD CONSTRAINT "Uzytkownicy_Projekty_uzytkownik_id_fkey" FOREIGN KEY ("uzytkownik_id") REFERENCES "Uzytkownicy"("uzytkownik_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Uzytkownicy_Projekty" ADD CONSTRAINT "Uzytkownicy_Projekty_projekt_id_fkey" FOREIGN KEY ("projekt_id") REFERENCES "Projekty"("projekt_id") ON DELETE RESTRICT ON UPDATE CASCADE;
