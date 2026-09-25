import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function ProductSection() {
  return (
    <section id="iphones" className="border-b border-white/5 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 text-center sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Catálogo
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Nossos iPhones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted">
            Modelos novos e seminovos revisados, prontos para entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
