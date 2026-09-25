import Link from "next/link";
import { buildWhatsAppLink, genericMessage } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(212,175,55,0.18) 0%, rgba(5,5,5,0) 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          iPhones e acessórios
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
          Seu próximo <span className="text-gold">iPhone</span> está aqui.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-text-muted sm:text-lg">
          iPhones, acessórios e atendimento personalizado em um só lugar.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="#iphones"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-base font-semibold text-bg-primary transition-colors hover:bg-gold-light"
          >
            Ver iPhones
          </Link>
          <a
            href={buildWhatsAppLink(genericMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/60 bg-transparent px-6 py-3 text-base font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
