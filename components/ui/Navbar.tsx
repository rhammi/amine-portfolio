"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home", download: false },
  { href: "/academics", label: "Academics", download: false },
  { href: "/projects", label: "Projects", download: false },
  { href: "/lifesaving", label: "Lifesaving", download: false },
  { href: "/contact", label: "Contact", download: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showEmail, setShowEmail] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const emailRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      const clickInsideNav = navRef.current?.contains(target);
      if (emailRef.current && !emailRef.current.contains(target)) {
        setShowEmail(false);
      }
      if (!clickInsideNav) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="text-base font-semibold tracking-tight text-white sm:text-lg"
          >
            Amine Rhammi
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-lg font-semibold text-white md:flex">
          {links.map((l) => {
            const active =
              !l.download &&
              (pathname === l.href || (pathname?.startsWith(l.href) && l.href !== "/"));
            return (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                className={
                  active
                    ? "rounded-md bg-white/20 px-3 py-1.5 text-white underline underline-offset-8 shadow-sm"
                    : "px-3 py-1.5 hover:text-white hover:underline hover:underline-offset-8"
                }
                {...(l.download ? { download: true, target: "_blank" } : {})}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur hover:bg-white/25 md:inline-flex"
          >
            Download Resume
          </a>

          <div className="relative" ref={emailRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmail((prev) => !prev);
              }}
              className="inline-flex rounded-full border border-white/30 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 sm:px-4"
              aria-haspopup="true"
              aria-expanded={showEmail}
            >
              Show email
            </button>
            {showEmail ? (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <span className="break-all">aminecana@hotmail.com</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard?.writeText("aminecana@hotmail.com");
                    }}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-100"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
              setShowEmail(false);
            }}
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-slate-950/80 pb-4 text-white backdrop-blur md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-3 text-sm font-semibold">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-1 flex flex-col gap-2 px-4">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/25 px-3 py-2 text-center text-sm font-semibold hover:bg-white/10"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText("aminecana@hotmail.com");
                setMobileOpen(false);
              }}
              className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/90"
            >
              Copy email
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
