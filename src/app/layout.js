import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wilpur.me",
  description: "teh site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
