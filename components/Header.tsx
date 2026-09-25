"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { buildWhatsAppLink, genericMessage } from "@/lib/whatsapp";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#iphones", label: "iPhones" },
  { href: "#acessorios", label: "Acessórios" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
  { href: "#instagram", label: "Instagram" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-bg-primary/85 backdrop-blur supports-[backdrop-filter]:bg-bg-primary/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-gold hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={buildWhatsAppLink(genericMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gold bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-bg-primary"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.67.96.98-3.58-.24-.37A9.94 9.94 0 1 1 22 12 9.94 9.94 0 0 1 12 22Zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.18 8.18 0 0 1-2.41-1.49 9 9 0 0 1-1.67-2.07c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52a2.06 2.06 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.67-1.62-.92-2.22s-.49-.5-.67-.5h-.57a1.1 1.1 0 0 0-.8.37 3.34 3.34 0 0 0-1 2.49c0 1.47 1.05 2.89 1.2 3.09a11.78 11.78 0 0 0 4.55 3.67c.64.27 1.13.43 1.52.55a3.66 3.66 0 0 0 1.67.1 2.74 2.74 0 0 0 1.79-1.27 2.22 2.22 0 0 0 .16-1.27c-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-text-primary hover:bg-white/5"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-white/5 bg-bg-primary"
        >
          <nav
            aria-label="Navegação mobile"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppLink(genericMessage())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-gold/10 px-4 py-3 text-base font-semibold text-gold transition-colors hover:bg-gold hover:text-bg-primary"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
