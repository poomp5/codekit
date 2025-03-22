import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontIbmThai } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Codekit",
  description: "Codekit Web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(fontIbmThai.style, "flex flex-col h-svh antialiased")}
      >
        <ThemeProvider>
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
