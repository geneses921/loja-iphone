import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { storeConfig } from "@/data/store";

export const metadata: Metadata = {
  title: `${storeConfig.name} | iPhones e Acessórios`,
  description:
    "Encontre iPhones e acessórios. Confira nossos modelos disponíveis e fale conosco pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
