/* Animation helpers. Everything here respects prefers-reduced-motion. */
export const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
export const fmt = (n, dec = 0) => Number(n).toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });

/* number tween from 0 to `to` */
export function tween(el, to, { dec = 0, suf = "", pre = "", dur = 1300 } = {}) {
  if (el._raf) cancelAnimationFrame(el._raf);
  if (reduce) { el.textContent = pre + fmt(to, dec) + suf; return; }
  const t0 = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = pre + fmt(to * e, dec) + suf;
    if (p < 1) el._raf = requestAnimationFrame(step);
  };
  el._raf = requestAnimationFrame(step);
}

/* count up any [data-cu="3.6+"] element when it scrolls into view */
export function countUps(root = document) {
  const els = [...root.querySelectorAll("[data-cu]:not([data-done])")];
  const run = (el) => {
    el.dataset.done = "1";
    const m = String(el.dataset.cu).match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
    if (!m) return;
    tween(el, parseFloat(m[2].replace(/,/g, "")), { dec: (m[2].split(".")[1] || "").length, pre: m[1], suf: m[3] });
  };
  if (!("IntersectionObserver" in window)) return els.forEach(run);
  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { run(x.target); io.unobserve(x.target); } }), { threshold: 0.4 });
  els.forEach((e) => io.observe(e));
}

/* scroll progress bar under the header */
export function progressBar() {
  const bar = document.createElement("div");
  bar.className = "sp"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  const upd = () => { const h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`; };
  addEventListener("scroll", upd, { passive: true }); upd();
}

/* rotating phrase in the hero */
export function rotator(el, list) {
  if (!el || reduce) return;
  let i = 0;
  setInterval(() => {
    el.classList.add("out");
    setTimeout(() => { i = (i + 1) % list.length; el.textContent = list[i]; el.classList.remove("out"); }, 380);
  }, 2600);
}

/* light particle network behind the hero */
export function particles(cv) {
  if (!cv || reduce) return;
  const ctx = cv.getContext("2d"); let w = 0, h = 0, dots = [], run = true, raf = 0;
  const size = () => {
    const r = cv.parentNode.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    w = r.width; h = r.height; cv.width = w * d; cv.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    const n = w < 640 ? 26 : 56;
    dots = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.8 }));
  };
  const tick = () => {
    if (!run) return;
    ctx.clearRect(0, 0, w, h);
    for (const a of dots) {
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fillStyle = "rgba(255,255,255,.75)"; ctx.fill();
    }
    for (let i = 0; i < dots.length; i++) for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y, d = dx * dx + dy * dy;
      if (d < 11500) { ctx.strokeStyle = `rgba(255,150,185,${(1 - d / 11500) * 0.45})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke(); }
    }
    raf = requestAnimationFrame(tick);
  };
  size(); addEventListener("resize", size);
  if ("IntersectionObserver" in window) new IntersectionObserver((en) => { run = en[0].isIntersecting; cancelAnimationFrame(raf); if (run) tick(); }).observe(cv.parentNode);
  else tick();
}

/* spotlight + gentle 3D tilt for .spot / .tilt cards (mouse devices only) */
export function pointerFx() {
  if (reduce || !matchMedia("(hover:hover)").matches) return;
  addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".tilt,.spot");
    if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
    if (c.classList.contains("tilt")) c.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 7}deg) translateY(-4px)`;
  }, { passive: true });
  addEventListener("pointerout", (e) => {
    const c = e.target.closest && e.target.closest(".tilt");
    if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
  });
}
