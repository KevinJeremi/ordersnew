import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import FloatingActionButtons from '@/components/FloatingActionButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Order | Digital Solutions Company",
  description: "Professional digital solutions for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}

        {/* Floating Action Buttons */}
        <FloatingActionButtons />
      </body>
    </html>
  );
}
