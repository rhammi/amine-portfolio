"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Case Studies" },
  { href: "/academics", label: "Education" },
  { href: "/lifesaving", label: "Leadership & Safety" },
  { href: "/contact", label: "Contact" },
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
    <header ref={navRef} className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-base font-bold tracking-tight text-white sm:text-lg">Amine Rhammi</Link>

        <nav className="hidden items-center gap-1 text-sm font-semibold text-white/85 lg:flex">
          {links.map((link) => {
            const active = link.href !== "/#experience" && (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)));
            return (
              <Link key={link.href} href={link.href} className={active ? "rounded-full bg-white/15 px-3 py-2 text-white" : "rounded-full px-3 py-2 hover:bg-white/10 hover:text-white"}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-slate-100 sm:inline-flex">
            Download CV
          </a>
          <button type="button" onClick={(e) => { e.stopPropagation(); setMobileOpen((v) => !v); }} className="rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white lg:hidden" aria-label="Toggle navigation" aria-expanded={mobileOpen}>
            Menu
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-semibold text-white">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10">{link.label}</Link>)}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-2 rounded-lg bg-white px-3 py-2 text-center font-bold text-slate-950">Download CV</a>
          </nav>
        </div>
      )}
    </header>
  );
}
