/*
  Warnings:

  - You are about to drop the `SaleSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SaleSummary";

-- CreateTable
CREATE TABLE "SalesSummary" (
    "salesSummaryId" TEXT NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesSummary_pkey" PRIMARY KEY ("salesSummaryId")
);
