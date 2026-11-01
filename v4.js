/* v4: Awards section, redesigned footer, mobile quick-jump and mobile action bar. */
import { I, esc } from "./icons.js";
import { waLink, WA_DISPLAY, WA_NUMBER } from "./ui.js";
import { PHOTO, AWARD } from "./sections.js";
import { initViewMore } from "./v5.js";

const enc = (p) => p.split("/").map(encodeURIComponent).join("/");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const MAIL = "ganeshtadi01@gmail.com";
const EXT = 'target="_blank" rel="noopener noreferrer"';

/* ---------------- Awards ---------------- */
export function awardsHTML() {
  const photo = enc(PHOTO), award = enc(AWARD);
  const alt = "The Web Wizard Award certificate, Nexivo, 19 September 2025";
  return `<div class="sh rv"><span class="eyebrow">Awards &amp; recognition</span><h2 id="awT">Web Wizard Award: Lead Developer at Nexivo</h2><p>Recognised by the CEO of Nexivo Consulting Pvt. Ltd. for the website work I led as Lead Developer.</p></div>
<div class="aw rv">
 <figure class="aw-me"><span class="ph-lock aw-ph" data-protect><img src="${photo}" alt="Tadi Ganesh, Senior Zoho Developer" width="400" height="400" loading="lazy" decoding="async" draggable="false" oncontextmenu="return false"></span>
  <figcaption><b>Tadi Ganesh</b><span>Lead Developer at Nexivo (Feb 2023 - Oct 2025)</span><em>${I.spark}<span>Web Wizard Award winner</span></em></figcaption></figure>
 <div class="aw-main">
  <span class="aw-badge">${I.spark}<span>The Web Wizard Award</span></span>
  <h3>For Excellence in Website Development</h3>
  <div class="aw-role" aria-label="Role at the time of the award"><span>${I.building}Lead Developer, Nexivo</span><span>${I.cal}19 September 2025</span></div>
  <div class="vm">
   <div class="vm-body">
    <p>I received this award as the <b>Lead Developer at Nexivo</b>, presented by <b>Ramakrishna Karolla, CEO of Nexivo Consulting Pvt. Ltd.</b>, in recognition of my creativity, technical expertise and dedication to building a seamless digital experience.</p>
    <p>It also recognised the strong, reliable online presence I led for Nexivo, one that reflects the vision and professionalism of the company. I grew at Nexivo from Technical Developer to Senior Developer to Lead Developer of the product team.</p>
    <ul class="aw-meta"><li>${I.building}<span>Nexivo Consulting Pvt. Ltd., Hyderabad</span></li><li>${I.cal}<span>19 September 2025</span></li><li>${I.doc}<span>Presented by Ramakrishna Karolla, CEO</span></li><li>${I.spark}<span>Role: Lead Developer &amp; Full-Stack Developer</span></li></ul>
   </div>
  </div>
  <button type="button" class="btn btn-p aw-btn" data-zoom="${award}" data-alt="${alt}" aria-label="View the award certificate larger">View certificate</button>
 </div>
 <figure class="aw-cert"><button type="button" class="lz aw-cb" data-zoom="${award}" data-alt="${alt}" aria-label="View the award certificate larger"><img src="${award}" alt="The Web Wizard Award certificate awarded to Ganesh Tadi, Lead Developer, by Nexivo Consulting Pvt. Ltd. on 19.09.2025, signed by Ramakrishna Karolla, CEO" width="1280" height="853" loading="lazy" decoding="async"></button><figcaption>Tap the certificate to view it full size</figcaption></figure>
</div>`;
}

/* ---------------- Footer (replaces the v3 footer; brand icon swapped for my photo, on the left) ---------------- */
export function footerHTML() {
  const host = document.getElementById("site-footer"); if (!host) return;
  const photo = enc(PHOTO), wa = waLink();
  const ql = [["home", "Home"], ["role", "My Role"], ["what", "What I Do"], ["experience", "Experience"], ["awards", "Awards"], ["extensions", "Extensions"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"]];
  const stats = [["4+", "Years"], ["60+", "Extensions"], ["4", "Countries"], ["4+ TB", "Migrated"]];
  host.classList.remove("ft2"); host.classList.add("ft4");
  host.innerHTML = `<div class="ft4-wave" aria-hidden="true"></div>
<div class="wrap ft4-in">
 <section class="ft4-cta" aria-labelledby="ftCta"><div><span class="ft4-eb">Open to new projects</span><h2 id="ftCta">Have a Zoho project in mind? Let's build it.</h2><p>Blueprints, extensions, migrations and Ideabox AI integrations, planned and delivered end to end.</p></div>
  <div class="ft4-act"><a class="btn ft4-b1" href="${wa}" ${EXT}>${I.wa}<span>Chat on WhatsApp</span></a><a class="btn ft4-b2" href="mailto:${MAIL}">${I.mail}<span>Send an email</span></a></div></section>
 <div class="ft4-g">
  <div class="ft4-me"><span class="ph-lock ft4-av" data-protect><img src="${photo}" alt="Tadi Ganesh" width="96" height="96" loading="lazy" decoding="async" draggable="false" oncontextmenu="return false"></span>
   <div class="ft4-id"><p class="ft4-n">Tadi Ganesh</p><p class="ft4-r">Senior Zoho Developer</p><p class="ft4-w">${I.pin}<span>Techworks Talent, Chennai</span></p></div>
   <p class="ft4-bio">Zoho projects, blueprints, extensions and Ideabox AI integration. Web Wizard Award winner as Lead Developer at Nexivo.</p>
   <div class="ft4-s"><a href="https://www.linkedin.com/in/tadi-ganesh-b1a600238" ${EXT} aria-label="LinkedIn">${I.linkedin}</a><a href="https://github.com/GaneshTadi" ${EXT} aria-label="GitHub">${I.github}</a><a href="${wa}" ${EXT} aria-label="WhatsApp">${I.wa}</a><a href="mailto:${MAIL}" aria-label="Email">${I.mail}</a></div></div>
  <nav class="ft4-l" aria-label="Quick links"><p class="ft4-h">Explore</p><ul>${ql.map(([k, t]) => `<li><a href="index.html#${k}">${t}</a></li>`).join("")}</ul></nav>
  <div class="ft4-l"><p class="ft4-h">Get in touch</p><ul><li><a href="mailto:${MAIL}">${I.mail}<span>${MAIL}</span></a></li><li><a href="${wa}" ${EXT}>${I.wa}<span>${WA_DISPLAY} (WhatsApp)</span></a></li><li><a href="tel:+${WA_NUMBER}">${I.phone}<span>Call ${WA_DISPLAY}</span></a></li></ul>
   <p class="ft4-h ft4-h2">Where I have worked</p><ul><li><a href="detail.html?type=exp&amp;id=tw">${I.building}<span>Techworks Talent, Chennai</span></a></li><li><a href="detail.html?type=exp&amp;id=asm">${I.building}<span>ASM Process Automation</span></a></li><li><a href="detail.html?type=exp&amp;id=nx">${I.building}<span>Nexivo, Hyderabad</span></a></li></ul></div>
 </div>
 <ul class="ft4-st" aria-label="Career highlights">${stats.map(([n, l]) => `<li><b data-cu="${esc(n)}">${esc(n)}</b><span>${l}</span></li>`).join("")}</ul>
</div>
<div class="wrap ft4-bar"><p>&copy; ${new Date().getFullYear()} Tadi Ganesh &middot; Senior Zoho Developer, Techworks Talent, Chennai</p><button type="button" class="ft4-top" data-top>${I.up}<span>Back to top</span></button></div>`;
}

/* ---------------- Mobile: horizontal section chips under the hero ---------------- */
const SECS = [["role", "My Role"], ["what", "What I Do"], ["experience", "Experience"], ["awards", "Awards"], ["extensions", "Extensions"], ["projects", "Projects"], ["skills", "Skills"], ["contact", "Contact"]];
export function initQuickJump() {
  const nav = document.getElementById("qj"); if (!nav) return;
  nav.innerHTML = SECS.map(([k, t]) => `<a href="#${k}" data-k="${k}">${t}</a>`).join("");
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver((en) => en.forEach((x) => {
    if (!x.isIntersecting) return;
    links.forEach((a) => { const on = a.dataset.k === x.target.id; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
  }), { rootMargin: "-35% 0px -55% 0px" });
  SECS.forEach(([k]) => { const s = document.getElementById(k); if (s) io.observe(s); });
  /* keep the chip row visible (sticky under the header) and scroll the active chip into view without moving the page */
  const row = nav;
  new MutationObserver(() => { const a = row.querySelector("a.on"); if (a) row.scrollTo({ left: a.offsetLeft - row.clientWidth / 2 + a.clientWidth / 2, behavior: reduce ? "auto" : "smooth" }); }).observe(row, { attributes: true, subtree: true, attributeFilter: ["class"] });
}

/* ---------------- Mobile: bottom action bar (Home / Projects / Awards / WhatsApp / Contact) ---------------- */
export function initMobileBar() {
  const bar = document.createElement("nav");
  bar.className = "mbar"; bar.setAttribute("aria-label", "Quick actions");
  bar.innerHTML = `<a href="#home">${I.up}<span>Top</span></a><a href="#projects">${I.doc}<span>Projects</span></a><a href="#awards">${I.spark}<span>Awards</span></a><a href="${waLink()}" ${EXT} class="mb-wa">${I.wa}<span>WhatsApp</span></a><a href="#contact">${I.mail}<span>Contact</span></a>`;
  document.body.appendChild(bar);
  document.body.classList.add("has-mbar");
}

export { initViewMore };
