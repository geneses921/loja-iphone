import { SafeImage } from "./SafeImage";
import { buildWhatsAppLink, productMessage } from "@/lib/whatsapp";
import { formatPrice, type Product } from "@/data/products";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const href = buildWhatsAppLink(productMessage(product));
  const isPlaceholder = href === "#";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-bg-secondary transition-colors hover:border-gold/40">
      <div className="flex h-[220px] w-full items-center justify-center bg-bg-primary/50 p-6 md:h-[240px] lg:h-[280px]">
        <SafeImage src={product.image} alt={product.name} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-text-primary">
          {product.name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-md border border-white/10 bg-bg-primary/50 px-2 py-0.5 text-text-muted">
            {product.storage}
          </span>
          <span
            className={
              "rounded-md px-2 py-0.5 text-xs font-semibold " +
              (product.condition === "Novo"
                ? "bg-gold/15 text-gold"
                : "bg-white/5 text-text-muted")
            }
          >
            {product.condition}
          </span>
        </div>

        <p className="mt-1 text-2xl font-bold text-gold">
          {formatPrice(product.price)}
        </p>

        <a
          href={href}
          target={isPlaceholder ? undefined : "_blank"}
          rel={isPlaceholder ? undefined : "noopener noreferrer"}
          aria-disabled={isPlaceholder}
          className={
            "mt-auto inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors " +
            (isPlaceholder
              ? "cursor-not-allowed border border-white/10 bg-bg-primary text-text-muted"
              : "bg-gold text-bg-primary hover:bg-gold-light")
          }
        >
          Tenho interesse
        </a>
      </div>
    </article>
  );
}
