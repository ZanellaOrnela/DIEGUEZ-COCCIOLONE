"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type NavLinkProps = PropsWithChildren<{
  href: string;
  onClick?: () => void;
}>;

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === '/' && href === '#inicio';
  return (
    <Link href={href} onClick={onClick} className={`text-sm md:text-[15px] text-black/80 hover:text-black transition ${isActive ? 'font-semibold' : ''}`}>
      {children}
    </Link>
  );
}


