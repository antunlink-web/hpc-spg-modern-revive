/**
 * Smooth scrolling to homepage sections, accounting for the fixed header
 * height and respecting `prefers-reduced-motion`.
 */

/** Extra offset so the section heading is not hidden behind the fixed header. */
function headerOffset(): number {
  const header = document.querySelector("header");
  const h = header?.getBoundingClientRect().height ?? 0;
  return h + 12;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Scroll to the element with the given id. Returns true when found. */
export function scrollToSection(id: string): boolean {
  if (typeof document === "undefined") return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const top =
    el.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
  // Keep keyboard focus in sync with the visual jump.
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  return true;
}

/**
 * Scroll to the id in `location.hash`, retrying briefly while the homepage
 * finishes mounting (images/lazy sections can shift layout).
 */
export function scrollToHash(hash: string, attempts = 12): void {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  let tries = 0;
  const tick = () => {
    if (scrollToSection(id) || tries >= attempts) return;
    tries += 1;
    window.setTimeout(tick, 60);
  };
  tick();
}
