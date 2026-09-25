import { storeConfig } from "@/data/store";

export function Location() {
  return (
    <section
      id="localizacao"
      className="border-b border-white/5 bg-bg-secondary"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Onde estamos
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Encontre nossa loja
          </h2>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-xl border border-white/5 bg-bg-primary/50 p-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7"
              fill="currentColor"
            >
              <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </div>
          <p className="text-lg font-medium text-text-primary">
            {storeConfig.location}
          </p>
          <p className="text-sm text-text-muted">
            Atendimento personalizado. Entre em contato para saber horários e
            disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
