import DashboardLayout from "@/app/dashboard/dashboardLayout";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className}`}
        suppressHydrationWarning={true}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
