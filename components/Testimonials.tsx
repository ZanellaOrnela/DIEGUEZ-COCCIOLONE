"use client";
import Section from './Section';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Te conocí en el peor momento de mi vida, entre llorando por mi separación. Y vos me recibiste con un ABRAZO! De ahí tu acompañamiento procesal fue fácil. Tardamos 5 años en resolver la VIOLENCIA, los ALIMENTOS, la partición de los bienes. Estuviste siempre atenta a mis tiempos y las idas y venidas propias de los conflictos que como me dijiste el primer día: se que los problemas de familia también son conflictos emocionales. Fuiste una persona que nunca olvidaré.',
    author: 'Pilar C. (Pcia de Bs Aires) 2022'
  },
  {
    quote:
      'Al lado de mi casa construyeron un edificio, te consulté y logré en dos meses que me reparen las paredes dañadas. Gracias.',
    author: 'G.C. 2024 CABA'
  },
  {
    quote:
      'Te pedí la sucesión de mis viejos y en 5 meses teníamos DECLARATORIA DE HEREDEROS! Genia. Estoy muy satisfecha con tu servicio.',
    author: 'Mirta (2021 CABA)'
  },
  {
    quote:
      'Tuve un accidente en BOMBEROS DE POMPEYA! Y en la Super Riesgo de Trabajo no me reconocieron nada. Vos me dijiste que seguiríamos hasta lograrlo. Así que seguí con juicio y lograste una sentencia que me permitió comprar un terreno en Merlo! Gracias a tu predisposición y seguimiento constante.',
    author: 'Emanuel F. CABA 2023'
  },
  {
    quote:
      'Tienes en nuestra empresa toda nuestra confianza. Hace 6 años que tenemos un abono y siempre nos cubres en todo. Vamos por más. Éxito.',
    author: 'Empresa Textil CABA'
  },
  {
    quote:
      'María Dieguez me sacó de la cárcel, estoy agradecido la excarcelación llegó en 72 hs. No diré quien soy.',
    author: 'JM'
  },
  {
    quote:
      'DIEGUEZ logró meter presos a estafadores en la venta múltiple de departamentos en construcción. CARA pero buena.',
    author: 'CF'
  },
  {
    quote:
      'DIEGUEZ es la más enérgica en el debate oral, se luce, parece de películas. El alegato de mi juicio por violación. Logró sobreseimiento. Gracias.',
    author: 'PP'
  },
  {
    quote:
      'Dieguez me llevó el juicio de despido por discriminación y salió todo bien. Estoy contento, la vuelvo a elegir.',
    author: 'FS'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="section relative">
      {/* Círculo gradiente rosa moviéndose */}
      <div className="absolute top-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-pink/70 rounded-full blur-3xl pointer-events-none animate-floatAround"></div>
      <div className="container-prose">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="section-title">La Confianza de Nuestros Clientes Habla por Nosotros</h2>
          <p className="section-subtitle mt-2">La mejor prueba de nuestra eficacia es la voz de quienes ya confiaron en nosotras.</p>
        </div>
        <div className="animate-fadeInUp">
          <div className="card p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <button 
                aria-label="Anterior" 
                className="p-2 sm:p-3 hover:bg-black/5 rounded-full transition-colors" 
                onClick={prev}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <blockquote className="text-center max-w-3xl mx-auto px-4">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">"{testimonials[index].quote}"</p>
                <footer className="mt-3 text-xs sm:text-sm text-muted">— {testimonials[index].author}</footer>
              </blockquote>
              <button 
                aria-label="Siguiente" 
                className="p-2 sm:p-3 hover:bg-black/5 rounded-full transition-colors" 
                onClick={next}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            
            {/* Indicadores de testimonio */}
            <div className="flex justify-center gap-2 mb-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? 'bg-accent' : 'bg-muted/30'
                  }`}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center text-xs sm:text-sm text-muted">
              <div className="card p-3 sm:p-4">
                9 de cada 10 casos logran una resolución favorable para el cliente.
              </div>
              <div className="card p-3 sm:p-4">
                Más de 500 clientes satisfechos a lo largo de nuestra trayectoria.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


