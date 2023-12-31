"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";
import "./globals.css";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "My application main title",
//   description: "Main description of my app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
      <Toaster expand={false} position="top-right" richColors />
    </html>
  );
}
