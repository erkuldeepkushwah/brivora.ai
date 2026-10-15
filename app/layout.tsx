import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brivora.ai - Enterprise AI & Managed IT Services',
  description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
  openGraph: {
    title: 'Brivora.ai - Enterprise AI & Managed IT Services',
    description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brivora.ai - Enterprise AI & Managed IT Services',
    description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-white text-slate-800 antialiased selection:bg-[#00d2d3] selection:text-slate-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
