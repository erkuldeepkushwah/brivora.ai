import type { Metadata } from 'next';
import './globals.css';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://erkuldeepkushwah.github.io/brivora.ai';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Brivora.ai - Enterprise AI & Managed IT Services',
  description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Brivora.ai - Enterprise AI & Managed IT Services',
    description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Brivora AI & IT Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brivora.ai - Enterprise AI & Managed IT Services',
    description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
  },
};

/* Structured data — helps search engines understand the business. */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brivora AI & IT Solutions',
  url: SITE_URL,
  description: 'Enterprise AI transformation, scalable cloud systems, and managed IT services.',
  knowsAbout: [
    'Artificial Intelligence',
    'Cloud Architecture',
    'DevOps',
    'Cybersecurity',
    'Managed IT Services',
    'Software Development',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white text-slate-800 antialiased selection:bg-[#00d2d3] selection:text-slate-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
