import { useEffect } from "react";

/**
 * Reveals animated elements as they approach the viewport.
 *
 * Individual stagger items are observed instead of the whole stagger
 * container. This prevents large grids from remaining invisible while
 * waiting for a tall parent element to satisfy IntersectionObserver.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const selector = [
      ".fade-up",
      ".reveal-up",
      ".reveal-left",
      ".reveal-right",
      ".reveal-fade",
      ".reveal-scale",
      ".phone-reveal",
      ".stagger-item",
    ].join(", ");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (elements.length === 0) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 80px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}
