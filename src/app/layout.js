import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "DigitalLab",
  description: "DigitalLab - A service providing agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
