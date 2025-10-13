import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="section pt-32 sm:pt-40 md:pt-48 lg:pt-64 xl:pt-80 pb-16 sm:pb-20 md:pb-24 lg:pb-32 relative">
      {/* Línea divisoria central */}
      <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-black" />
      
      {/* Contenedor principal */}
      <div className="container-prose">
        {/* Layout responsive: móvil apilado, desktop lado a lado */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 lg:items-center">
          {/* Texto - Izquierda en desktop, arriba en móvil */}
          <div className="text-center lg:text-left animate-slide-in-left flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight animate-slide-in-bottom animate-delay-200 mt-8 sm:mt-12 lg:mt-0">
              Asesoramiento Legal Preventivo
            </h1>
            <p className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl text-muted animate-slide-in-bottom animate-delay-250 font-medium">
              Anticiparte a los conflictos es parte de la planificación de la vida.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted animate-slide-in-bottom animate-delay-300 max-w-2xl mx-auto lg:mx-0">
              Los conflictos siempre inciden en las emociones. 
              Nuestros 30 años de experiencia proponen que juntos armemos estrategias basadas en la singularidad del tema y en cada caso buscar justa composición de los intereses de las partes.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-in-bottom animate-delay-400">
              <a href="#contacto" className="btn-primary transition-smooth hover:scale-105">
                Consulta Inmediata
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#areas" className="btn-outline transition-smooth hover:scale-105">Ver servicios</a>
            </div>
          </div>
          
          {/* Imagen - Derecha en desktop, abajo en móvil */}
          <div className="mt-8 lg:mt-0 animate-slide-in-right">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl animate-scale-in animate-delay-300">
                <img
                  src="/still-life-with-scales-justice (1).jpg"
                  alt="Estudio jurídico DIEGUEZ&COCCIOLONE - Balanza de la justicia representando servicios legales especializados"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover object-center rounded-lg lg:rounded-none shadow-lg lg:shadow-md border border-black transition-smooth hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
