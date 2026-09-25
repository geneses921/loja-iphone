import { storeConfig } from "@/data/store";
import type { Product } from "@/data/products";

const sanitizeNumber = (raw: string): string => raw.replace(/\D/g, "");

export const buildWhatsAppLink = (message: string): string => {
  const number = sanitizeNumber(storeConfig.whatsapp);
  if (!number || number === "SEUNUMEROAQUI") {
    return "#";
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
};

export const productMessage = (product: Product): string =>
  `Olá! Tenho interesse no ${product.name} ${product.storage}. Gostaria de saber mais informações.`;

export const genericMessage = (): string =>
  "Olá! Gostaria de saber mais informações sobre os iPhones disponíveis.";
