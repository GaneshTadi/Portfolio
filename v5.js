/* v5: photo protection (no click, zoom, drag, save-menu). */

/* ---------------- 1. Photo protection ----------------
   Any element marked data-protect (my photo) cannot be clicked, dragged, long-pressed or right-clicked.
   Honest note: this stops casual saving only. A browser can always fetch an image it displays. */
export function protectPhotos() {
  const hit = (e) => e.target instanceof Element && e.target.closest("[data-protect]");
  document.addEventListener("contextmenu", (e) => { if (hit(e)) e.preventDefault(); });
  document.addEventListener("dragstart", (e) => { if (hit(e)) e.preventDefault(); });
  document.addEventListener("selectstart", (e) => { if (hit(e)) e.preventDefault(); });
  /* stop the lightbox (document-level click handler) from ever seeing a click on the photo */
  document.addEventListener("click", (e) => { if (hit(e)) { e.preventDefault(); e.stopPropagation(); } }, true);
  /* pinch and double-tap zoom on the photo (iOS Safari gesture events) */
  ["gesturestart", "gesturechange", "gestureend"].forEach((t) => document.addEventListener(t, (e) => { if (hit(e)) e.preventDefault(); }, { passive: false }));
  /* two-finger touches that start on the photo must not pinch-zoom the page */
  document.addEventListener("touchstart", (e) => { if (e.touches.length > 1 && hit(e)) e.preventDefault(); }, { passive: false });
}
