import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DIEGUEZ&COCCIOLONE - Estudio Jurídico',
    short_name: 'DIEGUEZ&COCCIOLONE',
    description: 'Estudio jurídico especializado con más de 30 años de experiencia en derecho laboral, civil, familiar y penal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F2F2EB',
    theme_color: '#C99AA5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
