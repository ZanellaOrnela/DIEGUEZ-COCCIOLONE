import Section from './Section';

export default function About() {
  return (
    <Section
      id="quienes-somos"
      title="Somos DIEGUEZ&COCCIOLONE"
      subtitle="Un estudio fundado sobre la experiencia y el compromiso inquebrantable con la justicia."
    >
      {/* Círculo difuminado verde */}
      <div className="absolute -bottom-8 left-8 w-64 h-64 bg-greengray/60 rounded-full blur-3xl pointer-events-none animate-floatAround"></div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 animate-slide-in-left">
          <p className="animate-slide-in-bottom animate-delay-100">
            Las Abogadas Dieguez y Cocciolone: Más de 30 años de ejercicio profesional nos avalan. Hemos dedicado nuestra carrera a la defensa rigurosa de los derechos de nuestros clientes, construyendo una trayectoria de confianza y resultados.
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="card p-4 transition-smooth hover:scale-105 animate-scale-in animate-delay-200">
              <div className="text-xl font-semibold">+30</div>
              <div className="text-sm text-muted">Años de ejercicio</div>
            </div>
            <div className="card p-4 transition-smooth hover:scale-105 animate-scale-in animate-delay-300">
              <div className="text-xl font-semibold">Alta</div>
              <div className="text-sm text-muted">Complejidad</div>
            </div>
            <div className="card p-4 transition-smooth hover:scale-105 animate-scale-in animate-delay-400">
              <div className="text-xl font-semibold">Actualización</div>
              <div className="text-sm text-muted">Normativa constante</div>
            </div>
          </div>
        </div>
        <div className="space-y-6 animate-slide-in-right">
          <div className="animate-slide-in-bottom animate-delay-200 transition-smooth hover:scale-105">
            <h3 className="font-semibold">Misión</h3>
            <p className="text-muted">Nuestra Misión es proporcionar una representación legal de excelencia, actuando con la máxima ética y diligencia.</p>
          </div>
          <div className="animate-slide-in-bottom animate-delay-300 transition-smooth hover:scale-105">
            <h3 className="font-semibold">Visión</h3>
            <p className="text-muted">Nuestra Visión es ser su estudio de referencia, reconocido por la efectividad y la solidez de nuestras estrategias legales.</p>
          </div>
          <div className="animate-slide-in-bottom animate-delay-400 transition-smooth hover:scale-105">
            <h3 className="font-semibold">Valores</h3>
            <ul className="list-disc pl-5 text-muted space-y-1">
              <li><strong>Ética</strong>: Máxima transparencia y honestidad en cada etapa del proceso.</li>
              <li><strong>Experiencia</strong>: Más de tres décadas aplicando el conocimiento en la resolución de casos complejos.</li>
              <li><strong>Dedicación</strong>: Compromiso total con su causa, ofreciendo una atención personalizada.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}


