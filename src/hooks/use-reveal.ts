import { useEffect } from "react";

/**
 * Adds `.is-visible` to any reveal-class element when it scrolls into view.
 * Uses a later trigger so sections animate clearly while scrolling, not on load.
 * Runs once per element. Safe for SSR.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const selector = ".fade-up, .reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .phone-reveal, .stagger";
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -120px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
