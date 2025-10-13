export default function Contact() {
  return (
    <section id="contacto" className="section relative bg-warmgray/20">
      {/* Círculo gradiente beige moviéndose */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-beige/30 rounded-full blur-3xl pointer-events-none animate-floatAround"></div>
      <div className="container-prose">
        <div className="mb-8 px-8 text-center">
          <h2 className="section-title text-primary">Comience Hoy Mismo. Agende su Consulta Confidencial.</h2>
          <p className="section-subtitle mt-2 text-primary/90">Dar el primer paso es sencillo. Contáctenos para evaluar su caso sin compromiso.</p>
        </div>
        <div className="animate-fadeInUp">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formulario */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-black/20 p-4 sm:p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-left">
              <div className="mb-4 sm:mb-6 text-sm sm:text-base font-medium text-primary">Solicitar Evaluación Gratuita de Caso</div>
              <form
                action="https://formsubmit.co/contacto@dieguezcocciolone.com"
                method="POST"
                className="space-y-4 sm:space-y-6"
                aria-label="Formulario de consulta legal"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nueva consulta desde el sitio web" />
                <div>
                  <label className="block text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Nombre y Apellido</label>
                  <input 
                    name="nombre" 
                    required 
                    placeholder="Su nombre completo" 
                    className="w-full rounded-xl border border-black/20 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent" 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="su_correo@ejemplo.com" 
                      className="w-full rounded-xl border border-black/20 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2 font-medium">WhatsApp</label>
                    <input 
                      name="whatsapp" 
                      placeholder="11-5866-3037" 
                      className="w-full rounded-xl border border-black/20 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Mensaje</label>
                  <textarea 
                    name="mensaje" 
                    required 
                    placeholder="Describa brevemente su caso" 
                    rows={4} 
                    className="w-full rounded-xl border border-black/20 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent resize-none" 
                  />
                </div>
                <button className="btn-primary w-full text-sm sm:text-base" type="submit">Enviar consulta</button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-black/20 p-4 sm:p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-200">
                <div className="font-semibold text-primary text-sm sm:text-base lg:text-lg">Ubicación y Horario</div>
                <div className="mt-2 sm:mt-3 text-primary/80 text-xs sm:text-sm lg:text-base">
                  <div>Dirección del Despacho: Av. Callao 420, Piso 7 B, CABA.</div>
                  <div className="mt-1">Horario de Atención: Lunes a Viernes, de 9:00 a 18:00 hs.</div>
                </div>
                <div className="mt-4 sm:mt-6">
                  <iframe
                    title="Mapa"
                    className="w-full h-40 sm:h-48 lg:h-56 rounded-xl border"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Av.+Callao+420,+CABA&output=embed"
                  />
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-black/20 p-4 sm:p-6 shadow-lg transition-smooth hover:scale-105 animate-slide-in-bottom animate-delay-300">
                <div className="font-semibold text-primary text-sm sm:text-base lg:text-lg">Contacto Alternativo</div>
                <div className="mt-2 sm:mt-3 text-primary/80 space-y-2 text-xs sm:text-sm lg:text-base">
                  <div>WhatsApp Directo: 11-5866-3037 (Dra. Cocciolone)</div>
                  <div>WhatsApp Directo: 11-6568-7592 (Dra. Dieguez)</div>
                  <div>Teléfono Fijo: (011) 4371-2345</div>
                  <div>Email: contacto@dieguezcocciolone.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}