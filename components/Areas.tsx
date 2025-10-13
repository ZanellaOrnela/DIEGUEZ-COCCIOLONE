import Section from './Section';

const areas = [
  {
    title: 'Derecho Laboral y ART',
    desc: 'Defensa efectiva del trabajador: despidos, conflictos sindicales, reclamos por accidentes y enfermedades profesionales.'
  },
  {
    title: 'Derecho Civil',
    desc: 'Daños y perjuicios. Responsabilidad profesional. Contratos. Locación. Mandato. Mutuos con garantías. Testamentos. Usucapión. Prescripción adquisitivas. Acción reivindicación.'
  },
  {
    title: 'Derecho Vinculares',
    desc: 'Unión Convivencial. Divorcio. Regímenes Patrimoniales. Convenios Regulador de las Consecuencias Jurídicas de las Des-uniones. Matrimonio y divorcio Igualitarios. Convenios Prenupciales. Filiación. Adopción. Curatela.'
  },
  {
    title: 'Derecho Penal',
    desc: 'Delitos comunes y económicos – Delitos tributarios. Estafas virtuales. Instrucción. Excarcelaciones. Debate oral. Ejecución de penas.'
  },
  {
    title: 'Defensa de los Derechos del Consumidor',
    desc: 'Asesoramiento y seguimiento de denuncias de particulares. Daños y perjuicios derivados de la relación de consumo. Reclamos de plan de ahorros para fines determinados.'
  },
  {
    title: 'Accidentología',
    desc: 'Reclamos por accidentes. Accidentes de riesgos del trabajo. Recursos Ministerio de Trabajo. S.R.T. Accidente de tránsito. Mediación. Reclamos judiciales. Accidentes domésticos. Cobertura de seguros.'
  }
];

export default function Areas() {
  return (
    <div className="relative">
      {/* Imagen lateral - Solo visible en desktop */}
      <div className="hidden xl:block absolute left-0 w-[20%] h-full">
        <img
          src="/still-life-with-scales-justice.jpg"
          alt="Balanza de la justicia - Servicios legales especializados DIEGUEZ&COCCIOLONE"
          className="w-full h-full object-cover border-r border-black"
          loading="lazy"
          width={300}
          height={400}
        />
      </div>
      
      {/* Contenido principal */}
      <div className="xl:ml-[20%] xl:w-[80%]">
        <section id="areas" className="section relative">
          {/* Header con imagen en móvil/tablet */}
          <div className="mb-8 sm:mb-12">
            <div className="container-prose">
              <div className="text-center lg:text-left">
                <h2 className="section-title">Servicios Legales con Enfoque en Resultados</h2>
                <p className="section-subtitle mt-2">Nuestra especialización abarca los pilares fundamentales del derecho, garantizando una defensa integral y estratégica para cada situación.</p>
              </div>
              
              {/* Imagen en móvil/tablet */}
              <div className="mt-6 sm:mt-8 xl:hidden">
                <div className="max-w-md mx-auto lg:mx-0">
                  <img
                    src="/still-life-with-scales-justice.jpg"
                    alt="Balanza de la justicia - Servicios legales especializados DIEGUEZ&COCCIOLONE"
                    className="w-full h-48 sm:h-64 object-cover rounded-lg border border-black shadow-md"
                    loading="lazy"
                    width={400}
                    height={256}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="animate-fadeInUp">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-black">
              {areas.map((a, index) => (
                <div 
                  key={a.title} 
                  className={`p-4 sm:p-6 border-r border-b border-black flex flex-col transition-smooth hover:scale-105 animate-slide-in-bottom`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h3 className="title-raleway text-sm sm:text-base lg:text-lg">{a.title}</h3>
                  <p className="text-muted mt-2 flex-grow text-xs sm:text-sm lg:text-base">{a.desc}</p>
                  <a 
                    href="#contacto" 
                    className="btn-primary mt-4 w-full text-center transition-smooth hover:scale-105 text-xs sm:text-sm"
                  >
                    Consultar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


