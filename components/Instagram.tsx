import { storeConfig } from "@/data/store";

const isPlaceholder = storeConfig.instagram === "INSTAGRAM_URL";

export function Instagram() {
  return (
    <section
      id="instagram"
      className="border-b border-white/5 bg-bg-primary"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Redes sociais
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Conheça nossa loja no Instagram
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-text-muted">
          Acompanhe novidades, ofertas e lançamentos.
        </p>

        <a
          href={isPlaceholder ? "#" : storeConfig.instagram}
          target={isPlaceholder ? undefined : "_blank"}
          rel={isPlaceholder ? undefined : "noopener noreferrer"}
          aria-disabled={isPlaceholder}
          className={
            "mt-8 inline-flex items-center gap-3 rounded-md px-6 py-3 text-base font-semibold transition-colors " +
            (isPlaceholder
              ? "cursor-not-allowed border border-white/10 bg-bg-secondary text-text-muted"
              : "border border-gold bg-gold/10 text-gold hover:bg-gold hover:text-bg-primary")
          }
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2 .3-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.1.3-.3.9-.3 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2 .2.5.4.9.8 1.2.3.4.7.6 1.2.8.3.1.9.3 2 .3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2-.3.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.1-.3.3-.9.3-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.3-.1-.9-.3-2-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a5 5 0 1 1 0 9.9 5 5 0 0 1 0-9.9Zm0 1.7a3.2 3.2 0 1 0 0 6.5 3.2 3.2 0 0 0 0-6.5Zm5.2-2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
          </svg>
          Visitar Instagram
        </a>
      </div>
    </section>
  );
}
