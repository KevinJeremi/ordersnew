import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import FloatingActionButtons from '@/components/FloatingActionButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ORDERS | Digital Solutions Company - Web Development & AI Integration",
  description: "Professional digital solutions for your business needs. Web development, mobile apps, graphic design, AI integration, and digital transformation services. Trusted by 50+ companies.",
  keywords: "web development, mobile apps, digital transformation, AI integration, graphic design, ORDERS, digital solutions, business digitalization, responsive websites, ecommerce development",
  metadataBase: new URL('https://ordersapp.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ORDERS | Digital Solutions Company",
    description: "Professional digital solutions for your business needs. Web development, mobile apps, AI integration.",
    url: 'https://ordersapp.tech',
    siteName: 'ORDERS Digital Solutions',
    type: 'website',
    images: [
      {
        url: 'https://ordersapp.tech/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'ORDERS Digital Solutions Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ORDERS | Digital Solutions Company",
    description: "Professional digital solutions for your business needs",
    images: ['https://ordersapp.tech/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORDERS Digital Solutions",
    "alternateName": "ORDERS",
    "url": "https://ordersapp.tech",
    "logo": "https://ordersapp.tech/images/logo.png",
    "description": "Professional digital solutions for your business needs. Web development, mobile apps, graphic design, and digital transformation services.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-XXX-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/orders",
      "https://instagram.com/orders.official",
      "https://twitter.com/orders_tech"
    ],
    "services": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Modern, responsive websites with cutting-edge technology"
      },
      {
        "@type": "Service",
        "name": "Mobile Applications",
        "description": "Cross-platform apps with native performance"
      },
      {
        "@type": "Service",
        "name": "Digital Transformation",
        "description": "Complete business digitization strategies"
      }
    ]
  };

  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="IyjlYsTJg62vvuVcwjS-TpxLCN5MU29dClzbI4TQolQ" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
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
