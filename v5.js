/* v5: photo protection (no click, zoom, drag, save-menu) and a reusable accessible "View more" toggle. */

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

/* ---------------- 2. View more / View less ----------------
   Markup: <div class="vm" data-vm> <div class="vm-body">...everything...</div> </div>
   - data-vm-lines="N"  for text blocks: show N lines first (CSS line clamp)
   - data-vm-items="N"  for lists: show the first N <li> first
   The button is added only when there is actually something hidden, so short content stays clean. */
let uid = 0;
export function initViewMore(root = document) {
  root.querySelectorAll("[data-vm]:not([data-vm-ready])").forEach((box) => {
    const body = box.querySelector(".vm-body"); if (!body) return;
    const items = +box.dataset.vmItems || 0, lines = +box.dataset.vmLines || 0;
    const li = items ? [...body.querySelectorAll(":scope > li")] : [];
    let hidden = false;
    if (items) { li.forEach((x, i) => { if (i >= items) { x.classList.add("vm-x"); hidden = true; } }); }
    if (lines) { body.style.setProperty("--vm-lines", lines); body.classList.add("vm-clamp"); hidden = body.scrollHeight - body.clientHeight > 2; if (!hidden) body.classList.remove("vm-clamp"); }
    box.setAttribute("data-vm-ready", "");
    if (!hidden) return;
    const id = body.id || (body.id = "vm" + ++uid);
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "vm-btn"; btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", id);
    const label = box.dataset.vmLabel || "";
    const set = (open) => {
      btn.setAttribute("aria-expanded", String(open));
      btn.innerHTML = `<span>${open ? "View less" : "View more" + (label ? " " + label : "")}</span><svg class="ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${open ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}"/></svg>`;
      box.classList.toggle("vm-open", open);
      if (lines) body.classList.toggle("vm-clamp", !open);
      li.forEach((x, i) => { if (i >= items) x.classList.toggle("vm-x", !open); });
    };
    set(false);
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      const top = box.getBoundingClientRect().top;
      set(open);
      /* collapsing a long block can leave the reader far below it: bring the block back into view */
      if (!open && top < 0) box.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
    box.appendChild(btn);
  });
}
