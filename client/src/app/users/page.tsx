"use client";

import Header from "@/components/Header";
import { useGetUsersQuery } from "@/state/services/api";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Users;
