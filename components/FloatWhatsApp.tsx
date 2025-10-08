"use client";
import { MessageCircle } from 'lucide-react';

export default function FloatWhatsApp() {
  const href = `https://wa.me/5491158663037?text=${encodeURIComponent('Hola, necesito ayuda urgente con un asunto legal.')}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 inline-flex items-center justify-center rounded-full bg-greengray text-white w-12 h-12 sm:w-14 sm:h-14 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </a>
  );
}


