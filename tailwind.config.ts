import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva identidad visual
        beige: "#F2F2EB",   // Fondo crema suave solicitado
        greengray: "#5A615B", // Un poco más fuerte
        warmgray: "#9E988F",  // Un poco más marcado
        pink: "#C99AA5",      // Acento más intenso
        primary: "#000000",   // Negro para textos/títulos
        accent: "#C99AA5",    // Rosa empolvado intenso para CTAs
        muted: "#9E988F",     // Gris cálido para secundarios
        white: "#FFFFFF",
      },
      fontFamily: {
        // Definidas vía next/font como variables CSS
        sans: ["var(--font-raleway)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
        brand: ["var(--font-montserrat)", "var(--font-raleway)", "ui-sans-serif", "system-ui"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatAround: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(200px, -100px)' },
          '50%': { transform: 'translate(400px, 0)' },
          '75%': { transform: 'translate(200px, 100px)' },
          '100%': { transform: 'translate(0, 0)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms ease-out both',
        floatAround: 'floatAround 20s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

export default config


