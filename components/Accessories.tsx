import { accessories } from "@/data/products";

const accessoryIcons: Record<string, string> = {
  capinhas: "M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1Zm0 2v1h6V4H9Z",
  peliculas: "M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h8v2H8v-2Z",
  carregadores: "M11 2a5 5 0 0 0-4.33 7.5H4v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6h-2.67A5 5 0 0 0 13 2h-2Zm-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
  cabos: "M9 2v6H7v8h2v6h6v-6h2V8h-2V2H9Zm2 2h2v4h-2V4Zm0 12h2v4h-2v-4Z",
  fones: "M12 3a7 7 0 0 0-7 7v5a3 3 0 0 0 3 3h1v-7H7v-1a5 5 0 0 1 10 0v1h-2v7h1a3 3 0 0 0 3-3v-5a7 7 0 0 0-7-7Z",
  outros: "M12 2 2 7v10l10 5 10-5V7L12 2Zm0 2.3 7.5 3.75L12 11.8 4.5 8.05 12 4.3ZM4 9.85l7 3.5v7.3l-7-3.5v-7.3Zm9 10.8v-7.3l7-3.5v7.3l-7 3.5Z",
};

export function Accessories() {
  return (
    <section
      id="acessorios"
      className="border-b border-white/5 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 text-center sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Complementos
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Acessórios
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted">
            Itens essenciais para cuidar e aproveitar melhor o seu iPhone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-xl border border-white/5 bg-bg-primary/50 p-5 transition-colors hover:border-gold/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-bg-secondary text-gold">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d={accessoryIcons[item.id] ?? accessoryIcons.outros} />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
