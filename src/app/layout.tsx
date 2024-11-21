import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Islamic App",
  description: "Islamic App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-qur-2">
        <Header />
        {children}
      </body>
    </html>
  );
}
