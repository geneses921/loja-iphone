import { Logo } from "./Logo";
import { storeConfig } from "@/data/store";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <Logo />
        <p className="text-sm text-text-muted">
          © {year} {storeConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
