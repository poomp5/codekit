const Navbar = dynamic(() => import("@/components/navbar"));

import { fontManrope, fontOpenSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontManrope.variable,
          fontOpenSans.variable,
          "flex flex-col h-svh antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
