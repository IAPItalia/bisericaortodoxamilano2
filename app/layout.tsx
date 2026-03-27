import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    default: 'Parohia Milano 2 - Sfinții Mucenici Nazarie, Ghervasie, Protasie și Chelsie și Sfânta Parascheva',
    template: '%s | Parohia Milano 2',
  },
  description: 'Site-ul oficial al Parohiei Ortodoxe Române Milano 2. Biserica Românească la Milano: program slujbe, istoric, activități și comunitate ortodoxă în Italia.',
  keywords: [
    'biserica romaneasca la milano',
    'biserica ortodoxa romana la milano',
    'parohia milano 2',
    'ortodoxie milano',
    'comunitate romaneasca italia',
    'sfintii mucenici nazarie ghervasie protasie si chelsie sfanta parascheva',
    'pr stefan catalin andronache',
    'program slujbe milano',
    'biserica ortodoxa milano',
  ],
  authors: [{ name: 'Parohia Milano 2' }],
  creator: 'Vedendo.studio',
  publisher: 'Parohia Milano 2',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ais-pre-ctsnz7w52ouch5bsonbra6-30414542259.europe-west1.run.app'),
  alternates: {
    canonical: '/',
    languages: {
      'ro-RO': '/ro',
      'it-IT': '/it',
    },
  },
  openGraph: {
    title: 'Parohia Milano 2',
    description: 'Biserica Românească la Milano: program slujbe, istoric, activități și comunitate ortodoxă în Italia.',
    url: 'https://ais-pre-ctsnz7w52ouch5bsonbra6-30414542259.europe-west1.run.app',
    siteName: 'Parohia Milano 2',
    images: [
      {
        url: '/images/history.jpg',
        width: 1200,
        height: 630,
        alt: 'Parohia Milano 2',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parohia Milano 2',
    description: 'Biserica Românească la Milano: program slujbe, istoric, activități și comunitate ortodoxă în Italia.',
    images: ['/images/history.jpg'],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PlaceOfWorship',
  'name': 'Parohia Milano 2 - Sfinții Mucenici Nazarie, Ghervasie, Protasie și Chelsie și Sfânta Parascheva',
  'description': 'Parohia Ortodoxă Română Milano 2 - Biserica Românească la Milano.',
  'url': 'https://ais-pre-ctsnz7w52ouch5bsonbra6-30414542259.europe-west1.run.app',
  'logo': 'https://ais-pre-ctsnz7w52ouch5bsonbra6-30414542259.europe-west1.run.app/images/logo.jpeg',
  'image': 'https://ais-pre-ctsnz7w52ouch5bsonbra6-30414542259.europe-west1.run.app/images/history.jpg',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Via Giovanni della Casa 19',
    'addressLocality': 'Milano',
    'addressRegion': 'MI',
    'postalCode': '20151',
    'addressCountry': 'IT'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 45.4947,
    'longitude': 9.1385
  },
  'telephone': '+39 327 280 81 58',
  'sameAs': [
    'https://www.facebook.com/profile.php?id=100067144396831'
  ],
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Sunday',
      'opens': '09:00',
      'closes': '13:00'
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans bg-[#fdfcf9] text-[#2c2c2c] antialiased selection:bg-[#5A5A40] selection:text-white">
        {children}
      </body>
    </html>
  );
}
