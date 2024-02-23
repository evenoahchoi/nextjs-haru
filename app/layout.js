import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "하루명언",
  description: "하루명언",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
