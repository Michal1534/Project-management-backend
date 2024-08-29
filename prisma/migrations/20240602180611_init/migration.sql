-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assigned_user_id_fkey";

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "assigned_user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assigned_user_id_fkey" FOREIGN KEY ("assigned_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
