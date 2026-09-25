"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { GENERATIONS, products, type Generation } from "@/data/products";

type FilterKey = "all" | Generation;

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  ...GENERATIONS.map((g) => ({
    key: g as FilterKey,
    label: g === "XR" ? "iPhone XR" : `iPhone ${g}`,
  })),
];

export function ProductSection() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.generation === active);

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

        <div
          role="tablist"
          aria-label="Filtrar por geração"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f.key)}
                className={
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors " +
                  (isActive
                    ? "border-gold bg-gold text-bg-primary"
                    : "border-gold/40 bg-transparent text-gold hover:border-gold hover:bg-gold/10")
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-text-muted">
            Nenhum modelo disponível nesta categoria.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
