export interface DashboardMetrics {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

export type Product = {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
};

export type SalesSummary = {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
};

export type PurchaseSummary = {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
};

export type ExpenseSummary = {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
};

export type ExpenseByCategorySummary = {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
};
