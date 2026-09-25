import Link from "next/link";
import { storeConfig } from "@/data/store";

type Props = {
  className?: string;
  textClassName?: string;
};

export function Logo({ className, textClassName }: Props) {
  return (
    <Link
      href="/"
      className={
        "inline-flex items-center gap-2 group " + (className ?? "")
      }
      aria-label={storeConfig.name}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gold/40 bg-bg-secondary"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gold"
          fill="currentColor"
        >
          <path d="M17.05 12.04c-.03-2.7 2.2-4 2.3-4.06-1.26-1.84-3.21-2.09-3.9-2.12-1.66-.17-3.24.98-4.08.98-.85 0-2.14-.96-3.52-.93-1.81.03-3.48 1.05-4.41 2.67-1.88 3.26-.48 8.07 1.35 10.71.9 1.29 1.96 2.74 3.34 2.69 1.34-.05 1.85-.87 3.47-.87 1.62 0 2.08.87 3.5.84 1.45-.02 2.36-1.31 3.24-2.61 1.02-1.5 1.44-2.96 1.46-3.04-.03-.01-2.8-1.07-2.83-4.26ZM14.4 4.06c.74-.9 1.24-2.14 1.1-3.39-1.06.05-2.36.71-3.12 1.6-.69.78-1.29 2.05-1.13 3.27 1.18.09 2.4-.6 3.15-1.48Z" />
        </svg>
      </span>
      <span
        className={
          "font-semibold tracking-tight text-gold " + (textClassName ?? "text-lg")
        }
      >
        {storeConfig.name}
      </span>
    </Link>
  );
}
