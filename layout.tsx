import type { Metadata } from 'next';
import { Raleway, Montserrat } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','600'], variable: '--font-raleway' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'DIEGUEZ & COCCIOLONE — Estudio Jurídico',
  description: 'Soluciones Legales Sólidas. Su Tranquilidad, Nuestro Compromiso.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${raleway.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}


