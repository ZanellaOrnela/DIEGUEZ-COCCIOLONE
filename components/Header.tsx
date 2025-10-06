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
    <header className="fixed top-0 inset-x-0 z-50 bg-beige/80 backdrop-blur border-b border-black">
                  <div className="container-prose flex items-center justify-between py-3">
                    <a href="#inicio" className="flex items-center gap-3 font-semibold tracking-tight text-primary">
                      <img 
                        src="/ChatGPT Image 5 oct 2025, 10_54_08 p.m..png" 
                        alt="Logo DIEGUEZ&COCCIOLONE" 
                        className="h-8 w-auto"
                        width={32}
                        height={32}
                      />
                      DIEGUEZ&COCCIOLONE
                    </a>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
          ))}
          <a href="#contacto" className="btn-primary">Consulta Inmediata</a>
        </nav>

        <button aria-label="Abrir menú" className="md:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-beige border-b border-black shadow-sm">
          <div className="container-prose py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menú</span>
              <button aria-label="Cerrar menú" className="p-2" onClick={() => setOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary w-full">Consulta Inmediata</a>
          </div>
        </div>
      )}
    </header>
  );
}


