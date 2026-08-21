"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/academics", label: "Education" },
  { href: "/#about", label: "About" },
];

const secondaryLinks = [
  { href: "/resume.pdf", label: "CV", external: true },
  {
    href: "https://www.linkedin.com/in/amine-rhammi-392376b9/",
    label: "LinkedIn",
    external: true,
  },
  { href: "/contact", label: "Contact", external: false },
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
    <header ref={navRef} className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-base font-semibold tracking-tight text-white sm:text-lg">
          Amine Rhammi
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-200 lg:flex" aria-label="Primary navigation">
          {primaryLinks.map((link) => {
            const basePath = link.href.split("#")[0];
            const active = basePath !== "" && pathname === basePath && !link.href.includes("#");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "rounded-md bg-white/12 px-3 py-2 text-white" : "rounded-md px-3 py-2 transition hover:bg-white/8 hover:text-white"}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className={link.label === "Contact" ? "rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50" : "text-sm font-semibold text-slate-200 transition hover:text-white hover:underline hover:underline-offset-4"}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setMobileOpen((open) => !open);
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 text-white lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {[...primaryLinks, ...secondaryLinks].map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/lifesaving" onClick={() => setMobileOpen(false)} className="mt-2 rounded-lg border-t border-white/10 px-3 pt-4 text-sm font-medium text-slate-300">
              Leadership &amp; Beyond Engineering
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
