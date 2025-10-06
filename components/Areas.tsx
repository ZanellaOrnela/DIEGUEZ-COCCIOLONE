import Section from './Section';

const areas = [
  {
    title: 'Derecho Laboral y ART',
    desc: 'Defensa efectiva del trabajador: despidos, conflictos sindicales, reclamos por accidentes y enfermedades profesionales.'
  },
  {
    title: 'Derecho Civil y Comercial',
    desc: 'Contratos, ejecuciones, daños y perjuicios. Protegemos su patrimonio con estrategias sólidas.'
  },
  {
    title: 'Derecho de Familia',
    desc: 'Sucesiones, divorcios, cuota alimentaria y régimen de comunicación. Manejo sensible y discreto de asuntos personales.'
  },
  {
    title: 'Derecho Penal',
    desc: 'Asistencia legal en todas las etapas del proceso penal, garantizando su defensa y debido proceso.'
  },
  {
    title: 'Derechos del Consumidor',
    desc: 'Reclamos bancarios, problemas con servicios o compras. Defendemos sus derechos frente a empresas y proveedores.'
  },
  {
    title: 'Accidentes e Incapacidad',
    desc: 'Gestión de reclamos por accidentes de tránsito y trámites de incapacidad laboral. Máxima indemnización por sus lesiones.'
  }
];

export default function Areas() {
  return (
    <div className="relative">
      {/* Imagen pegada al borde izquierdo del navegador */}
      <div className="hidden md:block absolute left-0 w-[25%] h-full">
        <img
          src="/still-life-with-scales-justice.jpg"
          alt="Balanza de la justicia - Servicios legales especializados DIEGUEZ&COCCIOLONE"
          className="w-full h-full object-cover border-r border-black"
          loading="lazy"
          width={300}
          height={400}
        />
      </div>
      
      <div className="md:ml-[25%] md:w-[75%] h-full">
        <section id="areas" className="section relative h-full">
          <div className="h-full flex flex-col">
            <div className="mb-8 px-8">
              <h2 className="section-title">Servicios Legales con Enfoque en Resultados</h2>
              <p className="section-subtitle mt-2">Nuestra especialización abarca los pilares fundamentales del derecho, garantizando una defensa integral y estratégica para cada situación.</p>
            </div>
            <div className="animate-fadeInUp flex-grow flex flex-col">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-black flex-grow">
            {areas.map((a, index) => (
              <div key={a.title} className={`p-6 border-r border-b border-black flex flex-col transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-${(index + 1) * 100}`}>
                <h3 className="title-raleway">{a.title}</h3>
                <p className="text-muted mt-2 flex-grow">{a.desc}</p>
                <a href="#contacto" className="btn-primary mt-4 w-full text-center transition-smooth hover:scale-105">
                  Consultar
                </a>
              </div>
            ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


