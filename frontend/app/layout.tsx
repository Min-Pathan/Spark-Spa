import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AppProviders from "../providers/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spark Spa",
    template: "%s | Spark Spa",
  },
  description: "Discover salon and spa services at Spark Spa.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppProviders>{children}</AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}