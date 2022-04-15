/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToStaff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_promoterId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "_EventToStaff" DROP CONSTRAINT "_EventToStaff_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToStaff" DROP CONSTRAINT "_EventToStaff_B_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "_EventToStaff";

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "promoterId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "numGuests" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL,
    "payment" "Payment" NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventsToStaff" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Events_id_key" ON "Events"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_EventsToStaff_AB_unique" ON "_EventsToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_EventsToStaff_B_index" ON "_EventsToStaff"("B");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_promoterId_fkey" FOREIGN KEY ("promoterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsToStaff" ADD FOREIGN KEY ("A") REFERENCES "Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsToStaff" ADD FOREIGN KEY ("B") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
