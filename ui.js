/* Shared UI: logo lightbox, floating WhatsApp chat, keyboard helpers. */
import { I } from "./icons.js";

export const WA_NUMBER = "916300395308";
export const WA_DISPLAY = "+91 63003 95308";
export const WA_TEXT = "Hello Ganesh, I came across your portfolio and would like to connect.";
export const waLink = (text = WA_TEXT) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- Lightbox: any [data-zoom] button opens its logo full size ---- */
function lightbox() {
  let box, img, cap, closeBtn, last;
  const build = () => {
    box = document.createElement("div");
    box.className = "lb"; box.hidden = true;
    box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Logo preview");
    box.innerHTML = `<div class="lb-card"><button type="button" class="lb-x" aria-label="Close preview">${I.close}</button><img alt=""><p class="lb-cap"></p></div>`;
    document.body.appendChild(box);
    img = box.querySelector("img"); cap = box.querySelector(".lb-cap"); closeBtn = box.querySelector(".lb-x");
    box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".lb-x")) close(); });
  };
  const open = (btn) => {
    if (!box) build();
    last = btn;
    img.src = btn.dataset.zoom; img.alt = btn.dataset.alt || "Logo"; cap.textContent = btn.dataset.alt || "";
    box.hidden = false; document.body.classList.add("lb-open");
    requestAnimationFrame(() => { box.classList.add("on"); closeBtn.focus(); });
  };
  const close = () => {
    if (!box || box.hidden) return;
    box.classList.remove("on"); box.hidden = true; document.body.classList.remove("lb-open");
    if (last) last.focus();
  };
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-zoom]"); if (b) open(b); });
  document.addEventListener("keydown", (e) => {
    if (!box || box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); } /* the close button is the only control: keep focus inside the dialog */
  });
}

/* ---- Floating WhatsApp chat ---- */
function chat() {
  const w = document.createElement("div");
  w.className = "wa";
  w.innerHTML = `<section class="wa-pop" id="waPop" role="dialog" aria-labelledby="waT" hidden>
<header><img src="images/brandlogo.png" alt="" width="40" height="36"><div><b id="waT">Tadi Ganesh</b><small>Chat on WhatsApp</small></div><button type="button" class="wa-x" aria-label="Close chat">${I.close}</button></header>
<div class="wa-body"><p class="wa-msg">Hi there 👋<br>Thanks for visiting my portfolio. How can I help you today?</p><div class="wa-q"><button type="button" data-q="I would like to discuss a Zoho project.">Zoho project</button><button type="button" data-q="I would like to talk about an Ideabox AI integration.">Ideabox AI</button></div></div>
<form class="wa-form"><label class="sr-only" for="waIn">Your message</label><input id="waIn" type="text" placeholder="Type your message..." autocomplete="off" maxlength="500"><button type="submit" class="wa-send" aria-label="Send on WhatsApp">${I.send}</button></form></section>
<button type="button" class="wa-fab" aria-label="Chat on WhatsApp" aria-expanded="false" aria-controls="waPop">${I.wa}</button>`;
  document.body.appendChild(w);
  const pop = w.querySelector(".wa-pop"), fab = w.querySelector(".wa-fab"), input = w.querySelector("#waIn");
  const set = (on) => {
    if (on) { pop.hidden = false; requestAnimationFrame(() => pop.classList.add("on")); input.focus(); }
    else { pop.classList.remove("on"); pop.hidden = true; }
    fab.setAttribute("aria-expanded", on);
  };
  fab.addEventListener("click", () => set(pop.hidden));
  w.querySelector(".wa-x").addEventListener("click", () => { set(false); fab.focus(); });
  w.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => { input.value = b.dataset.q; input.focus(); }));
  w.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const t = input.value.trim();
    window.open(waLink(t ? `Hello Ganesh, ${t}` : WA_TEXT), "_blank", "noopener,noreferrer");
    input.value = ""; set(false);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !pop.hidden) { set(false); fab.focus(); } });
  document.addEventListener("click", (e) => { if (!pop.hidden && !w.contains(e.target)) set(false); });
}

/* ---- Escape closes the mobile menu; [data-top] buttons scroll to top ---- */
function keys() {
  document.addEventListener("keydown", (e) => {
    const hd = document.getElementById("hd"), b = document.getElementById("burger");
    if (e.key === "Escape" && hd && hd.classList.contains("open")) { hd.classList.remove("open"); b.setAttribute("aria-expanded", "false"); b.focus(); }
  });
  document.addEventListener("click", (e) => { if (e.target.closest("[data-top]")) scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
}

/* ---- Footer (shared by every page) ---- */
export function renderFooter() {
  const host = document.getElementById("site-footer"); if (!host) return;
  const wa = waLink(), mail = "ganeshtadi01@gmail.com";
  const ql = [["home", "Home"], ["role", "My Role"], ["what", "What I Do"], ["experience", "Experience"], ["extensions", "Extensions"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"]];
  const ext = 'target="_blank" rel="noopener noreferrer"';
  host.innerHTML = `<div class="ft2-wave" aria-hidden="true"><svg viewBox="0 0 1440 44" preserveAspectRatio="none"><path d="M0 22C180 0 360 44 540 22S900 0 1080 22 1260 44 1440 22V44H0z"/></svg></div>
<div class="wrap ft2-g">
 <div class="ft2-b"><button type="button" class="lz blink" data-zoom="public/images/projects/logos/brandlogo.png" data-alt="Tadi Ganesh brand logo" aria-label="View brand logo larger"><img src="images/brandlogo.png" alt="" width="52" height="48"></button>
  <p class="ft2-n">Tadi Ganesh</p><p>Senior Zoho Developer at Techworks Talent, Chennai. Zoho projects, blueprints, extensions and Ideabox AI integration.</p>
  <div class="ft2-s"><a href="https://www.linkedin.com/in/tadi-ganesh-b1a600238" ${ext} aria-label="LinkedIn">${I.linkedin}</a><a href="https://github.com/GaneshTadi" ${ext} aria-label="GitHub">${I.github}</a><a href="${wa}" ${ext} aria-label="WhatsApp">${I.wa}</a><a href="mailto:${mail}" aria-label="Email">${I.mail}</a></div></div>
 <nav class="ft2-l" aria-label="Quick links"><p class="ft2-h">Quick links</p><ul>${ql.map(([k, t]) => `<li><a href="index.html#${k}">${t}</a></li>`).join("")}</ul></nav>
 <div class="ft2-l"><p class="ft2-h">Contact</p><ul><li><a href="mailto:${mail}">${I.mail}${mail}</a></li><li><a href="${wa}" ${ext}>${I.wa}${WA_DISPLAY} (WhatsApp)</a></li><li><a href="tel:+${WA_NUMBER}">${I.phone}Call ${WA_DISPLAY}</a></li><li><a href="index.html#contact">${I.pin}Techworks Talent, Chennai</a></li></ul></div>
 <div class="ft2-l"><p class="ft2-h">Where I have worked</p><ul><li><a href="detail.html?type=exp&id=tw">${I.building}Techworks Talent, Chennai</a></li><li><a href="detail.html?type=exp&id=asm">${I.building}ASM Process Automation, Hyderabad</a></li><li><a href="detail.html?type=exp&id=nx">${I.building}Nexivo, Hyderabad</a></li></ul></div>
</div>
<div class="wrap ft2-bar"><p>&copy; ${new Date().getFullYear()} Tadi Ganesh &middot; Senior Zoho Developer, Techworks Talent, Chennai</p><button type="button" class="ft2-top" data-top>${I.up}Back to top</button></div>`;
}

export function initUI() { lightbox(); chat(); keys(); }
