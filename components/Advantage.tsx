import Section from './Section';

export default function Advantage() {
  return (
    <section id="ventaja" className="section relative bg-greengray/50">
      <div className="container-prose">
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <h2 className="section-title text-primary">Nuestra Fórmula para su Éxito Legal</h2>
          <p className="mt-2 sm:mt-4 text-gray-200 font-medium text-sm sm:text-base lg:text-lg max-w-4xl mx-auto lg:mx-0" style={{color: '#e5e7eb !important'}}>
            En un campo complejo, la diferencia está en la estrategia y el compromiso. Elegir DIEGUEZ&COCCIOLONE significa elegir la tranquilidad de estar bien representado.
          </p>
        </div>
        <div className="animate-fadeInUp">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-black/20 p-4 sm:p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-100">
              <h3 className="title-raleway text-primary text-sm sm:text-base lg:text-lg">Proceso</h3>
              <p className="text-primary/80 mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base">
                Claridad y Comunicación Continua. Eliminamos la jerga legal. Desde el primer encuentro, le explicaremos de forma sencilla las posibilidades de su caso. Mantendrá una comunicación directa con las abogadas a cargo, sin intermediarios.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-black/20 p-4 sm:p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-200">
              <h3 className="title-raleway text-primary text-sm sm:text-base lg:text-lg">Capacitación Continua</h3>
              <p className="text-primary/80 mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base">
                LA LEY COMO EN CUALQUIER DINÁMICA SOCIAL NO ES ESTÁTICA, ESTE ESTUDIO SE ENCUENTRA EN CONSTANTE ACTUALIZACIÓN Y CAPACITACIÓN PARA BRINDAR EL ASESORAMIENTO EFECTIVO, EFICAZ Y ACTUALIZADO. ACOMPAÑADA POR LA I.A. Y ACTUALIZADA CON HERRAMIENTAS DE CONSULTA AL SERVICIO DEL CLIENTE.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-black/20 p-4 sm:p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-300 sm:col-span-2 lg:col-span-1">
              <h3 className="title-raleway text-primary text-sm sm:text-base lg:text-lg">Marcamos la Diferencia</h3>
              <p className="text-primary/80 mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base">
                EL CLIENTE SE SIENTE PARTE DE LA ESTRATEGIA y SIENTE EL COMPROMISO DE PROFESIONALES. LA SOLIDEZ Y CALIDEZ DE LAS ABOGADAS PARTE, INVITA A CONFIAR CUALQUIER CUESTIÓN QUE SE PLANTEE CON FORMALIDAD Y SAPIENCIA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


