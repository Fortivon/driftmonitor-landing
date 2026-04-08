"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useId, useState } from "react";

type ExpandableScreenshotProps = {
  alt: string;
  children: ReactNode;
  height: number;
  src: string;
  title: string;
  width: number;
};

export function ExpandableScreenshot({
  alt,
  children,
  height,
  src,
  title,
  width,
}: ExpandableScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`${title}. Open larger screenshot`}
        className="group relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {children}
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/12 bg-slate-950/82 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-[0_14px_28px_-18px_rgba(15,23,42,0.8)] transition group-hover:border-sky-300/40 group-hover:text-white">
          Expand
        </span>
      </button>

      {isOpen ? (
        <div
          aria-labelledby={dialogTitleId}
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 p-4 sm:p-6"
          role="dialog"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,1))] shadow-[0_40px_120px_-40px_rgba(15,23,42,0.95)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p id={dialogTitleId} className="text-sm font-semibold text-white sm:text-base">
                  {title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Press Escape or click outside to close
                </p>
              </div>

              <button
                aria-label="Close expanded screenshot"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-xl leading-none text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="overflow-auto p-3 sm:p-5">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-950">
                <Image alt={alt} className="h-auto w-full" height={height} src={src} width={width} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
