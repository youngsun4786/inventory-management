"use client";

import Header from "@/components/Header";
import { useGetProductsQuery } from "@/state/services/api";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default Inventory;
