/*
  Warnings:

  - You are about to drop the column `staffId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_promoterId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_staffId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "staffId";
