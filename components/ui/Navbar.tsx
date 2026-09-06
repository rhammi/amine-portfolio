"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) setMobileOpen(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 text-base font-extrabold tracking-tight text-slate-950 sm:text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-700 text-xs font-black text-white">AR</span>
          <span>Amine Rhammi</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-sm font-semibold text-slate-700 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link aria-current={active ? "page" : undefined} key={link.href} href={link.href} className={active ? "rounded-full bg-slate-950 px-3.5 py-2 text-white" : "rounded-full px-3.5 py-2 hover:bg-slate-100 hover:text-slate-950"}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:border-slate-950 sm:inline-flex">
            View CV
          </a>
          <button type="button" onClick={(e) => { e.stopPropagation(); setMobileOpen((v) => !v); }} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 lg:hidden" aria-label="Toggle navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            Menu
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 text-sm font-semibold text-slate-900">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100">{link.label}</Link>)}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-2 rounded-lg bg-slate-950 px-3 py-2 text-center font-bold text-white">View CV</a>
          </nav>
        </div>
      )}
    </header>
  );
}
