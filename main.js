import { RESP, EXP, SKILLS, STATS, WD, LINKS, CATS } from "./data.js";
import { progressBar, particles, rotator, countUps, pointerFx } from "./fx.js";
import { patchData, MORE_PROJECTS, roleHTML, asmHTML, initExt, extDetailParts, expExtra, migBlock, initMig, IMG } from "./sections.js";
import { I, techStrip, chipsI, logoBtn, techIcon, iconImg } from "./icons.js";
import { initUI, renderFooter, waLink, WA_DISPLAY } from "./ui.js";
patchData(EXP, CATS);

const $ = (i) => document.getElementById(i);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const page = document.body.dataset.page;
document.documentElement.classList.add("js");
renderFooter();

/* Project data is read in place from the original repo module (src/data/projects.js). */
const ORDER = [3, 11, 12, 15, 6, 2, 16, 17, 4, 5, 7, 8, 9, 10, 13, 14, 18, 19, 1];
const LOGO_IDS = [2];
function toP(r) {
  return {
    id: r.id, t: r.title, cat: r.id >= 15 && r.id <= 19 ? "One" : r.category, d: r.description || "", ov: r.longDescription || r.description || "",
    img: IMG[r.id] ? IMG[r.id].split("/").map(encodeURIComponent).join("/") : "",
    tech: r.technologies || [], feat: r.features || [], ch: r.challenges || "", role: r.role || "", demo: LINKS[r.id] || ""
  };
}
let PROJ = [];
try {
  const m = await import("./src/data/projects.js");
  PROJ = [...MORE_PROJECTS, ...m.projects].map(toP).sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
} catch (e) { console.warn("Projects unavailable", e); }
const catLabel = (c) => (c === "One" ? "Zoho One Solution" : CATS[c] || "Project");
const ICON = { zoho: "🧩", fullstack: "💻", web: "🌐", One: "🏢", migration: "🚚" };

/* shared header / footer behaviour */
const hd = $("hd"), up = $("up");
$("burger").addEventListener("click", () => { const o = hd.classList.toggle("open"); $("burger").setAttribute("aria-expanded", o); });
$("nav").addEventListener("click", (e) => { if (e.target.closest("a")) hd.classList.remove("open"); });
addEventListener("scroll", () => { hd.classList.toggle("sc", scrollY > 8); up.classList.toggle("on", scrollY > 600); }, { passive: true });
up.addEventListener("click", () => scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));

function reveal() {
  const els = [...document.querySelectorAll(".rv:not(.in)")];
  if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { const el = x.target; el.style.transitionDelay = Math.min([...el.parentNode.children].indexOf(el), 8) * 70 + "ms"; el.classList.add("in"); setTimeout(() => { el.style.transitionDelay = ""; }, 1300); io.unobserve(el); } }), { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
  countUps();
}
const chips = (a) => `<div class="chips">${a.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`;

/* ---------------- HOME ---------------- */
function home() {
  $("stats").innerHTML = STATS.map(([n, l]) => `<div class="stat rv"><b data-cu="${esc(n)}">${n}</b><span>${l}</span></div>`).join("");
  $("mq").innerHTML = ["Zoho CRM", "Zoho Creator", "Zoho Catalyst", "Zoho WorkDrive", "Zoho Books", "Zoho People", "Deluge", "Node.js", "Express.js", "React.js", "OAuth 2.0", "REST APIs", "Webhooks", "Ideabox AI", "Razorpay", "Files.com"].map((l) => { const t = techIcon(l); return `<span>${t ? iconImg(t.src, "", 20) : ""}${l}</span>`; }).join("").repeat(2);
  $("roleBody").innerHTML = roleHTML();
  $("asmBody").innerHTML = asmHTML();
  rotator($("rot"), ["lead Zoho projects", "design blueprints and solutions", "build Zoho extensions", "migrate terabytes of data", "integrate Ideabox AI with Zoho", "automate multi-country operations"]);
  particles($("fxc"));
  $("respGrid").innerHTML = RESP.map((r) => `<article class="card rc rv"><div class="ic">${r.ic}</div><h3>${esc(r.t)}</h3><p>${esc(r.brief)}</p><ul class="mini">${r.pts.map((p) => `<li>${esc(p)}</li>`).join("")}</ul><a class="more" href="detail.html?type=resp&id=${r.id}">View More <span>&rarr;</span></a></article>`).join("");
  $("tl").innerHTML = EXP.map((e) => `<article class="tli rv${e.cur ? " cur" : ""}"><span class="dot"></span><div class="card"><div class="tl-top"><div class="tl-id">${logoBtn(e.logo, e.co.split(" - ")[0], "logo-co")}<div><h3>${esc(e.pos)}</h3><div class="co">${I.building}<span>${esc(e.co)}</span></div><div class="loc">${I.pin}<span>${esc(e.loc)}</span></div></div></div><span class="dur">${I.cal}<span>${esc(e.dur)}</span>${e.cur ? "<em>Current</em>" : ""}</span></div><p class="desc">${I.doc}<span>${esc(e.brief)}</span></p><ul class="bul">${e.hl.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>${chipsI(e.tags.slice(0, 4))}<a class="more" href="detail.html?type=exp&id=${e.id}">View More <span>&rarr;</span></a></div></article>`).join("");
  $("skillGrid").innerHTML = SKILLS.map((s) => `<div class="card sk rv"><h3><b>${s.ic}</b>${esc(s.t)}</h3>${chips(s.items)}</div>`).join("");
  $("ci").innerHTML = [
    [I.mail, "Email", "ganeshtadi01@gmail.com", "mailto:ganeshtadi01@gmail.com", ""],
    [I.wa, "WhatsApp (opens a chat with a hello message)", WA_DISPLAY, waLink(), "cl-wa"],
    [I.phone, "Call", WA_DISPLAY, "tel:+916300395308", ""],
    [I.linkedin, "LinkedIn", "tadi-ganesh", "https://www.linkedin.com/in/tadi-ganesh-b1a600238", ""],
    [I.github, "GitHub", "GaneshTadi", "https://github.com/GaneshTadi", ""],
    [I.file, "Resume", "Open in Zoho WorkDrive", WD, ""],
    [I.pin, "Based at", "Techworks Talent, Chennai", "", ""]
  ].map(([i, l, v, h, c]) => { const inner = `<b>${i}</b><div><small>${l}</small><span>${v}</span></div>`; return h ? `<a class="cl rv ${c}" href="${h}"${h.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>` : `<div class="cl rv">${inner}</div>`; }).join("");
  $("form").addEventListener("submit", (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    location.href = `mailto:ganeshtadi01@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from " + f.get("n"))}&body=${encodeURIComponent(f.get("m") + "\n\n" + f.get("n") + " (" + f.get("e") + ")")}`;
  });
  projects();
  initExt(reveal);
  const links = [...document.querySelectorAll(".nav a[data-id]")], secs = links.map((a) => $(a.dataset.id));
  addEventListener("scroll", () => { let cur = ""; secs.forEach((s) => { if (s && s.getBoundingClientRect().top < 140) cur = s.id; }); links.forEach((a) => a.classList.toggle("on", a.dataset.id === cur)); }, { passive: true });
}

function projects() {
  const grid = $("projGrid"), tabs = $("tabs"), btn = $("moreBtn");
  if (!PROJ.length) { grid.innerHTML = '<p class="rv">Projects are loading, please refresh.</p>'; return; }
  const FIRST = 6; let filter = "all", all = false;
  const defs = [["all", "All"], ["zoho", "Zoho Extensions"], ["One", "Zoho One"], ["migration", "Data Migration"], ["fullstack", "Full-Stack"], ["web", "Websites"]].filter(([k]) => k === "all" || PROJ.some((p) => p.cat === k));
  tabs.innerHTML = defs.map(([k, l]) => `<button class="tab${k === filter ? " on" : ""}" data-k="${k}" role="tab">${l} (${k === "all" ? PROJ.length : PROJ.filter((p) => p.cat === k).length})</button>`).join("");
  const draw = () => {
    const list = PROJ.filter((p) => filter === "all" || p.cat === filter), shown = all ? list : list.slice(0, FIRST);
    grid.innerHTML = shown.map((p) => {
      const href = `detail.html?type=project&id=${p.id}`;
      const im = p.img ? `<img src="${p.img}" alt="${esc(p.t)}" loading="lazy">` : `<span class="ph">${ICON[p.cat] || "📦"}</span>`;
      return `<article class="card pc rv"><a class="pimg${LOGO_IDS.includes(p.id) ? " lo" : ""}" href="${href}" tabindex="-1" aria-hidden="true">${im}</a><div class="pb"><span class="cat">${catLabel(p.cat)}</span><h3><a href="${href}">${esc(p.t)}</a></h3><p>${esc(p.d)}</p>${techStrip(p.tech)}${chips(p.tech.slice(0, 3))}<a class="more" href="${href}">View More <span>&rarr;</span></a></div></article>`;
    }).join("");
    btn.hidden = list.length <= FIRST;
    btn.textContent = all ? "Show fewer projects" : `Show all ${list.length} projects`;
    reveal();
  };
  tabs.addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (!b) return; filter = b.dataset.k; all = false; tabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("on", t === b)); draw(); });
  btn.addEventListener("click", () => { all = !all; draw(); if (!all) $("projects").scrollIntoView({ behavior: "smooth" }); });
  draw();
}

/* ---------------- DETAIL ---------------- */
const NAVLINKS = (items, cur) => `<div class="lk">${items.map(([h, t, id]) => `<a href="${h}"${id === cur ? ' class="on"' : ""}>${esc(t)}</a>`).join("")}</div>`;
const CTA = `<a class="btn btn-p" href="index.html#contact">Discuss a project</a>`;
const relCards = (ids) => { const l = ids.map((id) => PROJ.find((p) => p.id === id)).filter(Boolean); return l.length ? `<h2>Related projects</h2><div class="grid g2">${l.map((p) => `<article class="card pc rv"><a class="pimg${LOGO_IDS.includes(p.id) ? " lo" : ""}" href="detail.html?type=project&id=${p.id}" tabindex="-1" aria-hidden="true">${p.img ? `<img src="${p.img}" alt="" loading="lazy">` : `<span class="ph">${ICON[p.cat] || "📦"}</span>`}</a><div class="pb"><h3><a href="detail.html?type=project&id=${p.id}">${esc(p.t)}</a></h3><a class="more" href="detail.html?type=project&id=${p.id}">View More <span>&rarr;</span></a></div></article>`).join("")}</div>` : ""; };

function shell(back, backT, eyebrow, title, lead, meta, ic) {
  const icon = ic ? `<div class="ic${ic.includes("data-zoom") ? " ic-logo" : ""}">${ic}</div>` : "";
  const dm = meta ? `<div class="dm">${meta.map((x) => (Array.isArray(x) ? `<span>${x[0]}${esc(x[1])}</span>` : `<span>${esc(x)}</span>`)).join("")}</div>` : "";
  return `<section class="dh"><div class="wrap"><a class="back" href="${back}">&larr; ${backT}</a><div class="dt">${icon}<div><span class="eyebrow">${eyebrow}</span><h1>${esc(title)}</h1><p>${esc(lead)}</p>${dm}</div></div></div></section>`;
}
const body = (main, side) => `<section class="sec"><div class="wrap dgrid"><div class="dmain">${main}</div><aside class="side card">${side}</aside></div></section>`;

function detail() {
  const q = new URLSearchParams(location.search), type = q.get("type"), id = q.get("id"), root = $("detail");
  let html = "", title = "";
  if (type === "resp") {
    const r = RESP.find((x) => x.id === id);
    if (r) {
      title = r.t;
      html = shell("index.html#what", "Back to What I Do", "Responsibility", r.t, r.overview, null, r.ic) + body(
        `<h2>What I do</h2><ul class="chk">${r.does.map((d) => `<li>${esc(d)}</li>`).join("")}</ul><h2>How I work</h2><ol class="steps">${r.process.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ol><h2>What you get</h2><div class="dl">${r.deliver.map((d) => `<div>${esc(d)}</div>`).join("")}</div>${relCards(r.rel)}`,
        `<h3>Tools &amp; methods</h3>${chips(r.tools)}<h3>Other responsibilities</h3>${NAVLINKS(RESP.map((x) => [`detail.html?type=resp&id=${x.id}`, x.t, x.id]), id)}${CTA}`);
    }
  } else if (type === "exp") {
    const e = EXP.find((x) => x.id === id);
    if (e) {
      title = e.pos + " - " + e.co;
      html = shell("index.html#experience", "Back to Experience", "Experience", e.pos, e.brief, [[I.building, e.co], [I.pin, e.loc], [I.cal, e.dur]], logoBtn(e.logo, e.co.split(" - ")[0], "logo-co")) + body(
        `<h2>Responsibilities &amp; achievements</h2><ul class="chk">${e.all.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>${expExtra(e.id)}`,
        `<h3>Technologies</h3>${chipsI(e.tags)}<h3>Other roles</h3>${NAVLINKS(EXP.map((x) => [`detail.html?type=exp&id=${x.id}`, x.co, x.id]), id)}${CTA}`);
    }
  } else if (type === "project") {
    const i = PROJ.findIndex((x) => String(x.id) === id), p = PROJ[i];
    if (p) {
      title = p.t;
      const pv = PROJ[i - 1], nx = PROJ[i + 1];
      const sec = (h, c) => (c ? `<h2>${h}</h2>${c}` : "");
      html = shell("index.html#projects", "Back to Projects", catLabel(p.cat), p.t, p.d, p.role ? ["Role: " + p.role] : null) + body(
        `<div class="hi${LOGO_IDS.includes(p.id) ? " lo" : ""}">${p.img ? `<img src="${p.img}" alt="${esc(p.t)}">` : ICON[p.cat] || "📦"}</div>` +
        sec("Overview", `<p style="color:var(--g7)">${esc(p.ov)}</p>`) + (p.id === 20 ? sec("What I built", `<ul class="chk">${p.feat.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`) + migBlock() : sec("Key features", p.feat.length ? `<ul class="chk">${p.feat.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : "") + sec("Challenge", p.ch ? `<p style="color:var(--g7)">${esc(p.ch)}</p>` : "")) +
        `<div class="pn">${pv ? `<a href="detail.html?type=project&id=${pv.id}"><small>&larr; Previous</small>${esc(pv.t)}</a>` : "<span></span>"}${nx ? `<a href="detail.html?type=project&id=${nx.id}"><small>Next &rarr;</small>${esc(nx.t)}</a>` : ""}</div>`,
        `<h3>Technologies</h3>${chipsI(p.tech)}${p.demo ? `<a class="btn btn-o" style="margin-bottom:.7rem" href="${p.demo}" target="_blank" rel="noopener">Live demo &nearr;</a>` : ""}${CTA}`);
    }
  }
  else if (type === "ext") {
    const x = extDetailParts(id);
    if (x) { title = x.name; html = shell("index.html#extensions", "Back to Extensions", x.cat, x.name, x.desc, x.meta, x.ic) + body(x.main, x.side); }
  }
  if (!html) html = `<div class="nf wrap"><h1>Page not found</h1><p style="margin:.6rem 0 1.4rem;color:var(--g5)">That detail page does not exist.</p><a class="btn btn-p" href="index.html">Back to home</a></div>`;
  else document.title = `${title} | Tadi Ganesh, Senior Zoho Developer`;
  root.innerHTML = html;
  scrollTo(0, 0);
  reveal();
  initMig();
}

initUI();
progressBar();
pointerFx();
page === "home" ? home() : detail();
reveal();
