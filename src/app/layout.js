import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import SplashCursor from "@/components/ReactBit-Components/SplashCursor";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
});

export const metadata = {
  title: "DigitalLab",
  description: "DigitalLab - A service providing agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        {children}
        <SplashCursor/>
      </body>
    </html>
  );
}