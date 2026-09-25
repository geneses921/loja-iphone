"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function SafeImage({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={
          "flex items-center justify-center w-full h-full bg-bg-secondary " +
          (className ?? "")
        }
      >
        <svg
          viewBox="0 0 64 96"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3/4 w-auto opacity-60"
          aria-hidden="true"
        >
          <rect
            x="6"
            y="4"
            width="52"
            height="88"
            rx="8"
            ry="8"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <rect
            x="11"
            y="14"
            width="42"
            height="62"
            rx="2"
            ry="2"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle cx="32" cy="84" r="2.5" fill="#D4AF37" />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={
        "block max-w-full max-h-full w-auto h-auto object-contain " +
        (className ?? "")
      }
    />
  );
}
