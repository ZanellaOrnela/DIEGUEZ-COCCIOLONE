import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/10">
      <div className="container-prose py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-3 font-semibold text-primary">
            <img 
              src="/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png" 
              alt="Logo DIEGUEZ&COCCIOLONE" 
              className="h-6 w-auto"
              width={24}
              height={24}
            />
            DIEGUEZ&COCCIOLONE
          </div>
          <div className="text-muted mt-2 space-y-1">
            <div>Av. Callao 420, Piso 7 B, CABA</div>
            <div>Horario: Lunes a Viernes, 9:00 a 18:00 hs</div>
            <div>WhatsApp: 11-5866-3037 (Dra. Cocciolone)</div>
            <div>WhatsApp: 11-6568-7592 (Dra. Dieguez)</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Servicios</div>
          <nav className="flex flex-col gap-1">
            <a href="#areas" className="text-muted hover:text-black">Derecho Laboral</a>
            <a href="#areas" className="text-muted hover:text-black">Derecho Civil</a>
            <a href="#areas" className="text-muted hover:text-black">Derecho de Familia</a>
            <a href="#areas" className="text-muted hover:text-black">Derecho Penal</a>
            <a href="#areas" className="text-muted hover:text-black">Derechos del Consumidor</a>
          </nav>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <nav className="flex flex-col gap-1 mt-2">
            <a href="#" className="text-muted hover:text-black">Aviso Legal</a>
            <a href="#" className="text-muted hover:text-black">Política de Privacidad</a>
            <a href="#" className="text-muted hover:text-black">Política de Cookies</a>
          </nav>
          <div className="mt-4">
            <div className="font-semibold">Redes</div>
            <div className="mt-2 flex items-center gap-3">
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-full border border-warmgray/30 hover:bg-beige/30">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="container-prose py-6 text-xs text-muted">© {new Date().getFullYear()} DIEGUEZ&COCCIOLONE. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}


