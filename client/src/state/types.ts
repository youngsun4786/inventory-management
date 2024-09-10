export interface DashboardMetrics {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

type Product = {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
};

type SalesSummary = {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
};

type PurchaseSummary = {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
};

type ExpenseSummary = {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
};

type ExpenseByCategorySummary = {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
};
