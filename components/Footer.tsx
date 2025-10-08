import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-8 sm:mt-12 border-t border-black/10">
      <div className="container-prose py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm">
          {/* Información del estudio */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 font-semibold text-primary">
              <img 
                src="/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png" 
                alt="Logo DIEGUEZ&COCCIOLONE" 
                className="h-5 sm:h-6 w-auto"
                width={24}
                height={24}
              />
              <span className="text-sm sm:text-base">DIEGUEZ&COCCIOLONE</span>
            </div>
            <div className="text-muted mt-2 sm:mt-3 space-y-1 text-xs sm:text-sm">
              <div>Av. Callao 420, Piso 7 B, CABA</div>
              <div>Horario: Lunes a Viernes, 9:00 a 18:00 hs</div>
              <div>WhatsApp: 11-5866-3037 (Dra. Cocciolone)</div>
              <div>WhatsApp: 11-6568-7592 (Dra. Dieguez)</div>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-2 sm:space-y-3">
            <div className="font-semibold text-sm sm:text-base">Servicios</div>
            <nav className="flex flex-col gap-1 sm:gap-2">
              <a href="#areas" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Derecho Laboral</a>
              <a href="#areas" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Derecho Civil</a>
              <a href="#areas" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Derecho de Familia</a>
              <a href="#areas" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Derecho Penal</a>
              <a href="#areas" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Derechos del Consumidor</a>
            </nav>
          </div>

          {/* Legal y Redes */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="font-semibold text-sm sm:text-base">Legal</div>
              <nav className="flex flex-col gap-1 sm:gap-2 mt-2">
                <a href="#" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Aviso Legal</a>
                <a href="#" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Política de Privacidad</a>
                <a href="#" className="text-muted hover:text-black text-xs sm:text-sm transition-colors">Política de Cookies</a>
              </nav>
            </div>
            
            <div>
              <div className="font-semibold text-sm sm:text-base">Redes</div>
              <div className="mt-2 flex items-center gap-3">
                <a 
                  aria-label="LinkedIn" 
                  href="#" 
                  className="p-2 rounded-full border border-warmgray/30 hover:bg-beige/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-black/10">
        <div className="container-prose py-4 sm:py-6 text-xs text-muted text-center sm:text-left">
          © {new Date().getFullYear()} DIEGUEZ&COCCIOLONE. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}


