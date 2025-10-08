"use client";
import { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#quienes-somos', label: 'Estudio' },
  { href: '#areas', label: 'Servicios' },
  { href: '#testimonios', label: 'Casos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-beige/90 backdrop-blur-md border-b border-black shadow-sm">
      <div className="container-prose flex items-center justify-between py-3 sm:py-4">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3 font-semibold tracking-tight text-primary">
          <img 
            src="/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png" 
            alt="Logo DIEGUEZ&COCCIOLONE" 
            className="h-6 sm:h-8 w-auto"
            width={32}
            height={32}
          />
          <span className="text-sm sm:text-base lg:text-lg">DIEGUEZ&COCCIOLONE</span>
        </a>

        <nav className="hidden lg:flex gap-4 xl:gap-6 items-center">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
          ))}
          <a href="#contacto" className="btn-primary text-xs sm:text-sm">Consulta Inmediata</a>
        </nav>

        <button 
          aria-label="Abrir menú" 
          className="lg:hidden p-2 hover:bg-black/5 rounded-md transition-colors" 
          onClick={() => setOpen(true)}
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Overlay para móvil */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setOpen(false)}
          />
          
          {/* Menú móvil */}
          <div className="absolute inset-x-0 top-full bg-beige border-b border-black shadow-lg">
            <div className="container-prose py-4 sm:py-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="font-semibold text-lg">Menú</span>
                <button 
                  aria-label="Cerrar menú" 
                  className="p-2 hover:bg-black/5 rounded-md transition-colors" 
                  onClick={() => setOpen(false)}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-3 sm:gap-4">
                {links.map((l) => (
                  <NavLink 
                    key={l.href} 
                    href={l.href} 
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <a 
                  href="#contacto" 
                  onClick={() => setOpen(false)} 
                  className="btn-primary w-full text-center mt-2 sm:mt-4"
                >
                  Consulta Inmediata
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


