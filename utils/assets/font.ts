import { Poppins } from "next/font/google";

export const defaultFont = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700", "800"],
});
