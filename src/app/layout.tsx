import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import FloatingActionButtons from '@/components/FloatingActionButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ORDERS | Digital Solutions Company",
  description: "Professional digital solutions for your business needs. Web development, mobile apps, graphic design, and digital transformation services.",
  metadataBase: new URL('https://ordersapp.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ORDERS | Digital Solutions Company",
    description: "Professional digital solutions for your business needs",
    url: 'https://ordersapp.tech',
    siteName: 'ORDERS Digital Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ORDERS | Digital Solutions Company",
    description: "Professional digital solutions for your business needs",
  },
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
