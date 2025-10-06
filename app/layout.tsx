import type { Metadata } from 'next';
import { Raleway, Montserrat } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-raleway' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'DIEGUEZ&COCCIOLONE - Abogados Especializados | Estudio Jurídico',
  description: 'Estudio jurídico con 30+ años de experiencia. Especialistas en derecho laboral, civil, familiar y penal. Consulta gratuita. WhatsApp: 11-5866-3037',
  keywords: 'abogados, estudio jurídico, derecho laboral, derecho civil, derecho familiar, derecho penal, Buenos Aires, CABA, consulta legal',
  authors: [{ name: 'DIEGUEZ&COCCIOLONE' }],
  creator: 'DIEGUEZ&COCCIOLONE',
  publisher: 'DIEGUEZ&COCCIOLONE',
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
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://dieguez-cocciolone.com',
    siteName: 'DIEGUEZ&COCCIOLONE',
    title: 'DIEGUEZ&COCCIOLONE - Abogados Especializados | Estudio Jurídico',
    description: 'Estudio jurídico con 30+ años de experiencia. Especialistas en derecho laboral, civil, familiar y penal. Consulta gratuita.',
    images: [
      {
        url: 'https://dieguez-cocciolone.com/ChatGPT%20Image%205%20oct%202025%2C%2010_54_08%20p.m..png',
        width: 1200,
        height: 630,
        alt: 'DIEGUEZ&COCCIOLONE - Estudio Jurídico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIEGUEZ&COCCIOLONE - Abogados Especializados',
    description: 'Estudio jurídico con 30+ años de experiencia. Especialistas en derecho laboral, civil, familiar y penal.',
    images: ['https://dieguez-cocciolone.com/ChatGPT%20Image%205%20oct%202025%2C%2010_54_08%20p.m..png'],
  },
  alternates: {
    canonical: 'https://dieguez-cocciolone.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "DIEGUEZ&COCCIOLONE",
    "description": "Estudio jurídico especializado con más de 30 años de experiencia. Servicios legales en derecho laboral, civil, familiar, penal y derechos del consumidor.",
    "url": "https://dieguez-cocciolone.com",
    "logo": "https://dieguez-cocciolone.com/ChatGPT%20Image%205%20oct%202025%2C%2010_54_08%20p.m..png",
    "image": "https://dieguez-cocciolone.com/ChatGPT%20Image%205%20oct%202025%2C%2010_54_08%20p.m..png",
    "telephone": ["+54-11-5866-3037", "+54-11-6568-7592"],
    "email": "info@dieguez-cocciolone.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Callao 420, Piso 7 B",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.6037",
      "longitude": "-58.3816"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "serviceType": [
      "Derecho Laboral",
      "Derecho Civil y Comercial", 
      "Derecho de Familia",
      "Derecho Penal",
      "Derechos del Consumidor",
      "Accidentes e Incapacidad"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Dra. Dieguez",
        "jobTitle": "Abogada"
      },
      {
        "@type": "Person", 
        "name": "Dra. Cocciolone",
        "jobTitle": "Abogada"
      }
    ],
    "foundingDate": "1994",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png" type="image/png" />
        <link rel="apple-touch-icon" href="/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${raleway.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}


