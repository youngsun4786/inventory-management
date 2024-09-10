import { Request, Response } from "express";
import prisma from "../../prisma";

export class DashboardController {
  constructor() {}

  getDashboardMetrics = async (req: Request, res: Response): Promise<void> => {
    try {
      const popularProducts = await prisma.products.findMany({
        take: 15,
        orderBy: {
          stockQuantity: "desc",
        },
      });

      const salesSummary = await prisma.salesSummary.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      });

      const purchaseSummary = await prisma.purchaseSummary.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      });

      const expenseSummary = await prisma.expenseSummary.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      });

      const expensesByCategorySummaryRaw =
        await prisma.expenseByCategory.findMany({
          take: 5,
          orderBy: {
            date: "desc",
          },
        });

      const expenseByCategorySummary = expensesByCategorySummaryRaw.map(
        (item) => ({
          ...item,
          amount: item.amount.toString(),
        })
      );

      res.json({
        popularProducts,
        salesSummary,
        purchaseSummary,
        expenseSummary,
        expenseByCategorySummary,
      });
    } catch (error) {
      res.status(500).json({ message: "Error receiving dashboard metrics" });
    }
  };
}
