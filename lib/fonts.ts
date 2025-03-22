import { Manrope, Open_Sans } from "next/font/google";

export const fontManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const fontOpenSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
