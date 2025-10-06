"use client";
import Section from './Section';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'La Dra. Dieguez manejó mi caso de despido con una firmeza que me dio mucha paz. Logramos un acuerdo que superó mis expectativas en tiempo récord. Su experiencia fue clave.',
    author: 'Juan C.'
  },
  {
    quote:
      'Tuve un problema de derecho de familia muy delicado. La Dra. Cocciolone demostró no solo conocimiento, sino una empatía enorme. Gracias a ellas pude resolver mi situación con dignidad.',
    author: 'M. P.'
  },
  {
    quote:
      'Necesitaba gestionar una incapacidad laboral compleja. El equipo de DIEGUEZ&COCCIOLONE me guio en cada paso y conseguimos el resarcimiento que me correspondía. Profesionales al 100%.',
    author: 'Pablo L.'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="section relative">
      {/* Círculo gradiente rosa moviéndose */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pink/70 rounded-full blur-3xl pointer-events-none animate-floatAround"></div>
      <div className="container-prose">
        <div className="mb-8 px-8">
          <h2 className="section-title">La Confianza de Nuestros Clientes Habla por Nosotros</h2>
          <p className="section-subtitle mt-2">La mejor prueba de nuestra eficacia es la voz de quienes ya confiaron en nosotras.</p>
        </div>
        <div className="animate-fadeInUp">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <button aria-label="Anterior" className="p-2" onClick={prev}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <blockquote className="text-center max-w-3xl mx-auto">
                <p className="text-lg">"{testimonials[index].quote}"</p>
                <footer className="mt-3 text-sm text-muted">— {testimonials[index].author}</footer>
              </blockquote>
              <button aria-label="Siguiente" className="p-2" onClick={next}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-4 text-center text-sm text-muted">
              <div className="card p-4">
                9 de cada 10 casos logran una resolución favorable para el cliente.
              </div>
              <div className="card p-4">
                Más de 500 clientes satisfechos a lo largo de nuestra trayectoria.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


