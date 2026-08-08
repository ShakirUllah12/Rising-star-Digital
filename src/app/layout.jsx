import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://rising-star-digital.vercel.app'),
  title: 'Digital Marketing Agency in Pakistan | Rising Star Digital',
  description: 'Rising Star Digital helps ambitious brands grow with performance marketing, SEO, web development, branding and lifecycle strategy.',
  themeColor: '#241638',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Rising Star Digital',
    'image': 'https://rising-star-digital.vercel.app/og-image.png',
    '@id': 'https://rising-star-digital.vercel.app/#organization',
    'url': 'https://rising-star-digital.vercel.app',
    'telephone': '+923125791105',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Blue Area',
      'addressLocality': 'Islamabad',
      'postalCode': '44000',
      'addressCountry': 'PK'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 33.7116,
      'longitude': 73.0567
    },
    'sameAs': [
      'https://www.linkedin.com/company/rising-star-digital'
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
