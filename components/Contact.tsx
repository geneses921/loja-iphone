import { storeConfig } from "@/data/store";
import { buildWhatsAppLink, genericMessage } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppLink(genericMessage());
const isWhatsAppPlaceholder = whatsappHref === "#";
const isInstagramPlaceholder = storeConfig.instagram === "INSTAGRAM_URL";

type Item = {
  id: string;
  label: string;
  value: string;
  href: string;
  isPlaceholder: boolean;
  icon: string;
};

const items: Item[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: storeConfig.whatsapp,
    href: whatsappHref,
    isPlaceholder: isWhatsAppPlaceholder,
    icon: "M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.67.96.98-3.58-.24-.37A9.94 9.94 0 1 1 22 12 9.94 9.94 0 0 1 12 22Z",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: storeConfig.instagram,
    href: isInstagramPlaceholder ? "#" : storeConfig.instagram,
    isPlaceholder: isInstagramPlaceholder,
    icon: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Z",
  },
  {
    id: "location",
    label: "Localização",
    value: storeConfig.location,
    href: "#localizacao",
    isPlaceholder: false,
    icon: "M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
  },
];

export function Contact() {
  return (
    <section id="contato" className="border-b border-white/5 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 text-center sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Fale conosco
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Contato
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted">
            Escolha o canal de sua preferência. Teremos prazer em atender você.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {items.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                key={item.id}
                href={item.href}
                target={isExternal && !item.isPlaceholder ? "_blank" : undefined}
                rel={isExternal && !item.isPlaceholder ? "noopener noreferrer" : undefined}
                aria-disabled={item.isPlaceholder}
                className={
                  "group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-bg-primary/50 p-6 text-center transition-colors hover:border-gold/40 " +
                  (item.isPlaceholder
                    ? "cursor-not-allowed opacity-70"
                    : "")
                }
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  {item.label}
                </span>
                <span className="break-words text-base font-medium text-text-primary">
                  {item.value}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
