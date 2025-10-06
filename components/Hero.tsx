import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="section pt-96 md:pt-[32rem] pb-20 md:pb-32 relative">
      {/* Línea divisoria central */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-black" />
      
      {/* Contenedor principal */}
      <div className="container-prose">
        {/* Mitad izquierda - Texto */}
        <div className="md:absolute md:left-0 md:top-0 md:w-1/2 md:h-full md:px-16 animate-slide-in-left flex flex-col justify-center items-center" style={{paddingTop: '80px'}}>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight animate-slide-in-bottom animate-delay-200">
            Soluciones Legales Sólidas. Su Tranquilidad, Nuestro Compromiso.
          </h1>
          <p className="mt-4 text-lg text-muted animate-slide-in-bottom animate-delay-300">
            Enfrentar un problema legal puede ser abrumador. En DIEGUEZ&COCCIOLONE, combinamos más de 30 años de ejercicio profesional con un trato humano y directo para proteger sus derechos e intereses. Deje su preocupación en manos de abogadas expertas y dedicadas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 animate-slide-in-bottom animate-delay-400">
            <a href="#contacto" className="btn-primary transition-smooth hover:scale-105">
              Consulta Inmediata
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#areas" className="btn-outline transition-smooth hover:scale-105">Ver servicios</a>
          </div>
        </div>
        
        {/* Mitad derecha - Imagen */}
        <div className="hidden md:block md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full md:pl-8 animate-slide-in-right" style={{paddingTop: '80px'}}>
          <div className="h-full flex items-center justify-center">
            <div className="w-[65%] animate-scale-in animate-delay-300">
              <img
                src="/still-life-with-scales-justice (1).jpg"
                alt="Estudio jurídico DIEGUEZ&COCCIOLONE - Balanza de la justicia representando servicios legales especializados"
                className="w-full h-80 object-cover object-center rounded-none shadow-md border border-black transition-smooth hover:scale-105"
                loading="lazy"
                width={400}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
