import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Kelompok | Liquid Glass",
  description: "Website portofolio tugas mata kuliah dengan tema Liquid Glass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
