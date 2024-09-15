"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/state/types";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper<User>();

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
  columnHelper.accessor("userId", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
] as Array<ColumnDef<User, unknown>>;
