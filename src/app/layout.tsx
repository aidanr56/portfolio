import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Aidan Roche",
  description: "Personal portfolio — projects and research papers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}