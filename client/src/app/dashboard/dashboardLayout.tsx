"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";
import StoreProvider, { useAppSelector } from "../redux";

// require redux state
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    const mode = isDarkMode ? "dark" : "light";
    document.documentElement.classList.add(mode);
  });

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        } `}
      >
        <Navbar />

        {children}
      </main>
    </div>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardWrapper>{children}</DashboardWrapper>
    </StoreProvider>
  );
};

export default DashboardLayout;
