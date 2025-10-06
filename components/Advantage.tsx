import Section from './Section';

export default function Advantage() {
  return (
    <section id="ventaja" className="section relative bg-greengray/50">
      <div className="container-prose">
        <div className="mb-8 px-8">
          <h2 className="section-title text-primary">Nuestra Fórmula para su Éxito Legal</h2>
          <p className="mt-2 text-gray-200 font-medium text-lg" style={{color: '#e5e7eb !important'}}>En un campo complejo, la diferencia está en la estrategia y el compromiso. Elegir DIEGUEZ&COCCIOLONE significa elegir la tranquilidad de estar bien representado.</p>
        </div>
        <div className="animate-fadeInUp">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-black/20 p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-100">
              <h3 className="title-raleway text-primary">Proceso</h3>
              <p className="text-primary/80 mt-2">
                Claridad y Comunicación Continua. Eliminamos la jerga legal. Desde el primer encuentro, le explicaremos de forma sencilla las posibilidades de su caso. Mantendrá una comunicación directa con las abogadas a cargo, sin intermediarios.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-black/20 p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-200">
              <h3 className="title-raleway text-primary">Experiencia</h3>
              <p className="text-primary/80 mt-2">
                Especialización Comprobada y Trayectoria. Nuestros más de 30 años en litigios nos permiten anticipar escenarios y construir defensas robustas. Esta experiencia se traduce en una mayor probabilidad de éxito para usted.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-black/20 p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-300">
              <h3 className="title-raleway text-primary">Valor</h3>
              <p className="text-primary/80 mt-2">
                Enfoque Estratégico y Tarifas Transparentes. Priorizamos la resolución estratégica y la minimización de costos. Le proporcionamos un presupuesto claro y por escrito, sin sorpresas ni honorarios ocultos. Invertimos en su tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


