"use client";

import { Product } from "@/state/types";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
const columnHelper = createColumnHelper<Product>();

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("productId", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Product Name",
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => <div className="font-medium">{`$${info.getValue()}`}</div>,
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: (info) => (info.getValue() ? info.getValue() : "N/A"),
  }),
  columnHelper.accessor("stockQuantity", {
    header: "Stock Quantity",
    cell: (info) => info.getValue(),
  }),
] as Array<ColumnDef<Product, unknown>>;
