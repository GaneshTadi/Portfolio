import { EXTS, EXT_CATS, EXT_BASE } from "./extensions.js";
import { tween, fmt, reduce } from "./fx.js";

const g = (i) => document.getElementById(i);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chips = (a) => `<div class="chips">${a.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`;

/* ------------------------------------------------------------------ */
/* Patches to the existing experience data (kept out of data.js)       */
/* ------------------------------------------------------------------ */
export function patchData(EXP, CATS) {
  CATS.migration = "Data Migration";
  const asm = EXP.find((e) => e.id === "asm");
  if (asm) {
    asm.dur = "Nov 2025 - Oct 2026";
    asm.hl[2] = "Files.com to WorkDrive migration engine: 4+ TB, 3 crore+ files";
    asm.all = asm.all.map((t) => (t.includes("Files.com") ? "Engineered a Node.js migration engine that moved 4+ TB (3 crore+ files and 2 lakh+ folders) from Files.com to Zoho WorkDrive, using a multi-token architecture, a queueing system, chunked uploads, error-file management, auto-resume and a live monitoring dashboard" : t));
    if (!asm.tags.includes("Node.js")) asm.tags.splice(3, 0, "Node.js");
  }
  const nx = EXP.find((e) => e.id === "nx");
  if (nx) {
    nx.pos = "Lead Developer & Full-Stack Developer";
    nx.brief = "Grew from Technical Developer to Senior Developer and then Lead Developer for the product team, building ZoomBackup.cloud, the Zoho extension portfolio and 60+ API integrations.";
    nx.hl = ["Promoted from Technical Developer to Senior Developer to Lead Developer of the product team", "ZoomBackup.cloud: production SaaS with 99.9% uptime", "Zoho CRM extensions published on the Nexivo catalogue (KYC, validation, sync)"];
    nx.all = ["Progressed through three levels at Nexivo: Technical Developer, then Senior Developer, then Lead Developer for the product team", ...nx.all];
    nx.tags = ["Product team lead", ...nx.tags];
  }
}

/* ------------------------------------------------------------------ */
/* Role section (overall outline + growth ladder)                      */
/* ------------------------------------------------------------------ */
const ROLES = [
  { now: true, per: "Now", t: "Senior Zoho Developer", co: "Techworks Talent, Chennai", p: "Project manager and team lead for Zoho engagements: blueprint, scope, solutioning, client communication, Ideabox AI integration and extension development.", id: "tw", ic: "🧭" },
  { per: "Nov 2025 - Oct 2026", t: "Zoho One Developer", co: "ASM Process Automation", p: "Process automation across Zoho One for clients in India, UAE, Saudi Arabia and Oman, plus a 4+ TB Files.com to WorkDrive migration engine.", id: "asm", ic: "⚙️" },
  { per: "Mar 2023 - Oct 2025", t: "Lead Developer & Full-Stack Developer", co: "Nexivo, Zoho Premium Partner", p: "Grew from Technical Developer to Senior Developer to Lead Developer of the product team. Built ZoomBackup.cloud and the Zoho extension portfolio.", id: "nx", ic: "🚀" }
];
const LADDER = [["Step 1", "Technical Developer", "Built Zoho extensions and API integrations"], ["Step 2", "Senior Developer", "Owned larger builds and integrations end to end"], ["Step 3", "Lead Developer", "Led the product team at Nexivo"]];

export const ladHTML = () => `<div class="card lad rv"><div class="lad-h"><div><span class="eyebrow">Growth at Nexivo</span><h3>Technical Developer &rarr; Senior Developer &rarr; Lead Developer</h3></div><span class="lad-b">Product team</span></div><div class="lad-s">${LADDER.map(([s, t, d]) => `<div class="ls"><small>${s}</small><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}</div></div>`;

export function roleHTML() {
  return `<div class="ol">${ROLES.map((r) => `<article class="card rcard rv tilt${r.now ? " now" : ""}"><div class="rtop"><span class="ric">${r.ic}</span><span class="per">${esc(r.per)}</span></div><h3>${esc(r.t)}</h3><div class="co">${esc(r.co)}</div><p>${esc(r.p)}</p><a class="more" href="detail.html?type=exp&id=${r.id}">View More <span>&rarr;</span></a></article>`).join("")}</div>${ladHTML()}`;
}

/* ------------------------------------------------------------------ */
/* ASM section                                                         */
/* ------------------------------------------------------------------ */
const ASM_STATS = [["4", "Countries served"], ["7", "Zoho One functions"], ["4+ TB", "Data migrated"], ["3 Cr+", "Files moved"]];
const ASM_TILES = [
  ["💸", "Multi-country Expense Management", "Creator app with 2-level approvals and dashboards, integrated with People, CRM, Projects and Books."],
  ["👥", "Zoho People HRMS", "HR policies, labor-law compliance, shifts, attendance, payroll alignment and employee lifecycle automation."],
  ["🧠", "CRM as the data hub", "Zoho CRM acts as a central multi-country hub that triggers country-specific Books and Projects instances."],
  ["📚", "Zoho Books for 4 countries", "India, UAE, Saudi Arabia and Oman configured for tax, invoicing and statutory compliance."],
  ["🧾", "India payroll", "Salary structures, custom payslips and statutory settings set up end to end."],
  ["🎓", "Training in Zoho Learn", "Structured training programs so teams adopt the automated processes."]
];
export const asmHTML = () => `<div class="asm-st">${ASM_STATS.map(([n, l]) => `<div class="st rv"><b data-cu="${esc(n)}">${esc(n)}</b><span>${l}</span></div>`).join("")}</div>
<div class="asm-g">${ASM_TILES.map(([i, t, d]) => `<article class="at spot rv"><span class="ai">${i}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join("")}</div>
<div class="mf rv"><div class="mf-t"><span class="eyebrow">Featured build</span><h3>Files.com &rarr; Zoho WorkDrive migration engine</h3><p>A Node.js server that moved 4+ TB, over 3 crore files and 2 lakh folders, with multi-token uploads, a queue, chunked transfers and error-file retries.</p><div class="mf-b"><a class="btn btn-w" href="detail.html?type=project&id=20">View the project &rarr;</a><a class="btn btn-g" href="detail.html?type=exp&id=asm">ASM role details</a></div></div>
<div class="flow" aria-hidden="true"><div class="fn"><b>📁</b>Files.com<small>Source</small></div><i class="fl"></i><div class="fn big"><b>🟢</b>Node.js server<small>Queue &middot; Tokens &middot; Retries</small></div><i class="fl"></i><div class="fn"><b>☁️</b>Zoho WorkDrive<small>Chunked upload</small></div></div></div>`;

/* ------------------------------------------------------------------ */
/* Extensions                                                          */
/* ------------------------------------------------------------------ */
const CAT_INFO = {
  kyc: ["Checks identity, tax or bank details straight from the Zoho record, so onboarding data is verified instead of typed in blindly.", "Runs automatically or from a button, depending on how the extension is configured.", "Writes the verification result back to the record so the team can see and act on it."],
  val: ["Validates email addresses or phone numbers on Leads and Contacts, one record at a time or in batches.", "Can run automatically on new records or manually from a button.", "Keeps contact data clean to improve deliverability and reduce bounces."],
  fx: ["Updates currency exchange rates on a schedule (daily or 24-hourly, depending on the variant).", "Keeps multi-currency quotes, invoices and bills accurate without manual edits.", "The same idea is packaged for CRM, Books, Inventory and Billing."],
  sync: ["Connects Zoho with an external app such as SharePoint, OneDrive, WorkDrive, Shopify, ActiveCampaign, WhatsApp or Razorpay.", "Works from inside the Zoho record so users do not need to switch tools.", "Keeps documents, customers, orders or payments in step between the two systems."],
  data: ["Automates a data-quality or workflow step inside Zoho, such as duplicate checks, conversions, project mapping or spam control.", "Reduces repetitive clicks for the people who work in the module every day.", "Shows the extra context, such as related records, right where it is needed."]
};
const extBy = (s) => EXTS.find((e) => e[0] === s);

export function initExt(reveal) {
  const grid = g("extGrid"); if (!grid) return;
  const tabs = g("extTabs"), btn = g("extMore"), q = g("extQ"), cnt = g("extCount");
  const FIRST = 9; let cat = "all", all = false, term = "";
  const defs = [["all", "All"], ...Object.entries(EXT_CATS).map(([k, v]) => [k, v[0]])];
  tabs.innerHTML = defs.map(([k, l]) => `<button class="tab${k === cat ? " on" : ""}" data-k="${k}" role="tab">${l} (${k === "all" ? EXTS.length : EXTS.filter((e) => e[3] === k).length})</button>`).join("");
  const draw = () => {
    const list = EXTS.filter((e) => (cat === "all" || e[3] === cat) && (!term || (e[1] + " " + e[4] + " " + e[2]).toLowerCase().includes(term)));
    const shown = all || term ? list : list.slice(0, FIRST);
    grid.innerHTML = shown.length ? shown.map((e) => `<article class="card xc rv tilt spot"><div class="xt"><span class="xi">${EXT_CATS[e[3]][1]}</span><span class="xa">Zoho ${esc(e[2])}</span></div><h3><a href="detail.html?type=ext&id=${e[0]}">${esc(e[1])}</a></h3><p>${esc(e[4])}</p><a class="more" href="detail.html?type=ext&id=${e[0]}">View More <span>&rarr;</span></a></article>`).join("") : `<p class="xe">No extension matches that search. Try a different word, such as <b>Aadhaar</b>, <b>email</b> or <b>exchange</b>.</p>`;
    btn.hidden = !!term || list.length <= FIRST;
    btn.textContent = all ? "Show fewer extensions" : `Show all ${list.length} extensions`;
    cnt.textContent = `${list.length} of ${EXTS.length} extensions`;
    reveal();
  };
  tabs.addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (!b) return; cat = b.dataset.k; all = false; tabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("on", t === b)); draw(); });
  btn.addEventListener("click", () => { all = !all; draw(); if (!all) g("extensions").scrollIntoView({ behavior: "smooth" }); });
  q.addEventListener("input", () => { term = q.value.trim().toLowerCase(); draw(); });
  draw();
}

export function extDetailParts(slug) {
  const e = extBy(slug); if (!e) return null;
  const [s, name, app, cat, desc] = e, [cl, ic] = EXT_CATS[cat];
  const same = EXTS.filter((x) => x[3] === cat && x[0] !== s);
  const rel = same.slice(0, 4);
  const i = EXTS.findIndex((x) => x[0] === s), pv = EXTS[i - 1], nx = EXTS[i + 1];
  return {
    name, desc, ic, cat: cl, meta: ["Zoho " + app, cl, "Published by Nexivo"],
    main: `<h2>Overview</h2><p class="lede">${esc(desc)}</p><p class="lede">This extension is part of the Zoho extension portfolio I worked on at Nexivo, a Zoho Premium Partner. It is listed on the Nexivo extensions catalogue.</p>
<h2>What this kind of extension does</h2><ul class="chk">${CAT_INFO[cat].map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
<h2>See the original listing</h2><p class="lede">Features, prerequisites and the marketplace link are on the Nexivo page for this extension.</p><p><a class="btn btn-p" href="${EXT_BASE}${s}" target="_blank" rel="noopener">View on Nexivo &nearr;</a></p>
${rel.length ? `<h2>More in ${esc(cl)}</h2><div class="grid g2">${rel.map((r) => `<article class="card xc rv"><div class="xt"><span class="xi">${ic}</span><span class="xa">Zoho ${esc(r[2])}</span></div><h3><a href="detail.html?type=ext&id=${r[0]}">${esc(r[1])}</a></h3><a class="more" href="detail.html?type=ext&id=${r[0]}">View More <span>&rarr;</span></a></article>`).join("")}</div>` : ""}
<div class="pn">${pv ? `<a href="detail.html?type=ext&id=${pv[0]}"><small>&larr; Previous</small>${esc(pv[1])}</a>` : "<span></span>"}${nx ? `<a href="detail.html?type=ext&id=${nx[0]}"><small>Next &rarr;</small>${esc(nx[1])}</a>` : ""}</div>`,
    side: `<h3>Built with</h3>${chips(["Zoho " + app, "Deluge", "Client Script", "REST APIs"])}<h3>Browse by category</h3><div class="lk">${Object.entries(EXT_CATS).map(([k, v]) => `<a href="index.html#extensions"${k === cat ? ' class="on"' : ""}>${esc(v[0])} (${EXTS.filter((x) => x[3] === k).length})</a>`).join("")}</div><a class="btn btn-o" style="margin-bottom:.7rem" href="${EXT_BASE}${s}" target="_blank" rel="noopener">View on Nexivo &nearr;</a>`
  };
}

/* ------------------------------------------------------------------ */
/* Experience detail extras                                            */
/* ------------------------------------------------------------------ */
export function expExtra(id) {
  if (id === "nx") return `<h2>Growth path at Nexivo</h2>${ladHTML()}<h2>Extensions I built</h2><div class="card xlink rv"><div><b>${EXTS.length} Zoho extensions</b><span>KYC, validation, exchange-rate, sync and workflow extensions published on the Nexivo catalogue.</span></div><a class="btn btn-p" href="index.html#extensions">Browse extensions</a></div>`;
  if (id === "asm") return `<h2>Featured build</h2><div class="card xlink rv"><div><b>Files.com to Zoho WorkDrive migration</b><span>4+ TB, 3 crore+ files and 2 lakh+ folders moved with a Node.js engine, multi-token uploads, a queue and error-file retries.</span></div><a class="btn btn-p" href="detail.html?type=project&id=20">View project</a></div>`;
  return "";
}

/* ------------------------------------------------------------------ */
/* Migration project                                                   */
/* ------------------------------------------------------------------ */
export const MIG = {
  id: 20, title: "Files.com to Zoho WorkDrive Migration Engine", category: "migration",
  description: "Node.js migration engine that moved 4+ TB (3 crore+ files, 2 lakh+ folders) from Files.com to Zoho WorkDrive with multi-token uploads, a queue, chunked transfers and error-file retries, watched on a live dashboard.",
  longDescription: "A complex data migration from Files.com to Zoho WorkDrive covering more than 4 TB of data. I built a Node.js server that reads the Files.com folder tree, recreates the hierarchy in WorkDrive and transfers every file in chunks. A queue controls the order and concurrency of work, a pool of tokens spreads the load across the WorkDrive API, and anything that fails is written to error files and a retry queue instead of being lost. In total the engine handled over 3 crore (30 million+) files and more than 2 lakh (200,000+) folders, and a browser dashboard showed progress, failures and the retry queue live.",
  technologies: ["Node.js", "Express.js", "Files.com API", "Zoho WorkDrive API", "OAuth 2.0", "Chunked uploads", "Queue", "Live dashboard"],
  features: ["Multi-token architecture: uploads are spread across several tokens so no single token is the bottleneck", "Node server for error handling: network drops, API errors and expired tokens are caught and retried", "Error file management: every failed file or folder is recorded with its path and reason, ready to retry", "Queueing system: folders first, then files, with controlled concurrency and a separate retry queue", "Chunked uploads for large files, with auto-resume after interruptions", "Live dashboard: uploads, failures, skipped items, folders, data moved, speed and the retry queue"],
  challenges: "Moving tens of millions of files means something will always fail: dropped connections (for example socket hang up), throttled API calls and expired tokens. The design goal was that nothing is lost silently. Failures are logged, queued and retried, and the dashboard shows exactly what is left.",
  role: "Developer, ASM Process Automation"
};
export const MORE_PROJECTS = [MIG];

const ARCH = [["📁", "Files.com", "Source: folders and files read through the API"], ["🟢", "Node.js server", "Orchestrator: builds the queue, keeps the state"], ["🔑", "Token pool", "Multiple tokens share the upload load"], ["☁️", "Zoho WorkDrive", "Destination: folders recreated, files uploaded in chunks"]];
const BLOCKS = [
  ["🔑", "Multi-token architecture", "Instead of pushing everything through one token, the server rotates across a pool of tokens. This spreads the API load, keeps uploads moving and lets the engine carry on if one token is slowed down."],
  ["🛡️", "Node server for error handling", "Every request is wrapped. Network drops such as socket hang up, API errors and token expiry are caught, retried and logged, so one bad file never stops the run."],
  ["🗂️", "Error file management", "Each failure is saved with its path, type (file or folder) and reason. Those error files feed the retry queue, so a re-run only touches what failed."],
  ["🚦", "Queueing system", "Work is queued rather than fired at once: folders are created first so the hierarchy exists, then files are uploaded with controlled concurrency. Failed items wait in a separate retry queue."],
  ["🧩", "Chunked uploads", "Large files are split into chunks, which keeps memory use low and lets a transfer resume instead of starting over after an interruption."],
  ["📈", "Live monitoring dashboard", "A browser dashboard with Overview, Live Events, Successes, Skipped, Errors, Retry Queue and Timeline views, plus Retry buttons to re-run failed items."]
];
const RUNS = {
  a: { name: "Snapshot 1", status: "Running", st: "run", start: "6/8/2026 7:21:48 PM", end: "In progress...", k: { uploads: 81988, failed: 250, skipped: 3425, total: 85663, folders: 14446, ffailed: 11, data: 65.07, speed: 0.47 }, m: { active: 1, conc: 20, queue: 326, failed: 250 }, banner: "326 items in retry queue: 11 folders, 315 files" },
  b: { name: "Snapshot 2", status: "Done (with errors)", st: "done", start: "6/8/2026 5:34:39 PM", end: "10/6/2026 10:45:43 AM", k: { uploads: 127843, failed: 1365, skipped: 2017, total: 131225, folders: 6871, ffailed: 6, data: 221.03, speed: 0.393 }, m: { active: 0, conc: 30, queue: 316, failed: 1365 }, banner: "316 items in retry queue: 6 folders, 310 files" }
};
const KPI = [["uploads", "Uploads", "kg"], ["failed", "Failed", "kr"], ["skipped", "Skipped", "kz"], ["total", "Total files", "kb"], ["folders", "Folders created", "kg"], ["ffailed", "Folders failed", "kr"], ["data", "Data transferred", "kp"], ["speed", "Avg speed", "ko"]];
const LIVE = [["active", "Active uploads"], ["conc", "Concurrency"], ["queue", "Retry queue"], ["failed", "Failed"]];

export function migBlock() {
  return `<h2>Impact</h2><div class="imp">${[["4+ TB", "Data migrated"], ["3 Cr+", "Files transferred"], ["2 L+", "Folders recreated"]].map(([n, l]) => `<div class="card rv"><b data-cu="${esc(n)}">${esc(n)}</b><span>${l}</span></div>`).join("")}</div>
<h2>How the migration works</h2><div class="arch rv">${ARCH.map(([i, t, d], k) => `${k ? '<i class="fl"></i>' : ""}<div class="an"><b>${i}</b><strong>${esc(t)}</strong><small>${esc(d)}</small></div>`).join("")}</div>
<div class="loop rv"><span>Failed file or folder</span><i>&rarr;</i><span>Error file</span><i>&rarr;</i><span>Retry queue</span><i>&rarr;</i><span>Back into the queue</span></div>
<h2>Core building blocks</h2><div class="grid g2 bl">${BLOCKS.map(([i, t, d]) => `<article class="card rv"><div class="ic">${i}</div><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join("")}</div>
<h2>Live monitor dashboard</h2><p class="lede">The dashboard below is rebuilt from two snapshots of the real migration monitor. Switch between them to see how a running batch and a finished batch compare. Individual file names are hidden for client confidentiality.</p>
<div class="mon rv" id="mon"><div class="mon-h"><span class="logo-m">⇄ MIGRATOR</span><span class="mon-t">Files.com &rarr; Zoho WorkDrive &middot; Live Monitor</span><span class="mon-s" id="monS"></span></div>
<div class="mon-tabs" role="tablist">${Object.entries(RUNS).map(([k, r], i) => `<button type="button" class="${i ? "" : "on"}" data-run="${k}" role="tab">${r.name}</button>`).join("")}</div>
<div class="mon-bn" id="monBn"></div>
<div class="mon-times"><div><small>Start time</small><b id="monStart"></b></div><div><small>End time</small><b id="monEnd"></b></div></div>
<div class="kpis">${KPI.map(([k, l, c]) => `<div class="kpi ${c}"><small>${l}</small><b data-k="${k}">0</b></div>`).join("")}</div>
<div class="prog"><div class="prog-t"><span>Migration progress</span><b id="monPct"></b></div><div class="bar-m"><i class="u" id="bu"></i><i class="s" id="bs"></i><i class="f" id="bf"></i></div><div class="leg"><span class="u">Uploaded</span><span class="s">Skipped</span><span class="f">Failed</span></div></div>
<div class="live">${LIVE.map(([k, l]) => `<div><small>${l}</small><b data-m="${k}">0</b></div>`).join("")}</div>
<div class="feed" id="feed" aria-live="off"></div></div>
<figure class="shot rv"><img src="images/migration-dashboard.webp" alt="Screenshot of the migration monitor dashboard" loading="lazy" onerror="this.parentNode.remove()"></figure>
<h2>Challenges this design solves</h2><ul class="chk"><li>Rate limits and slow calls: work is spread over multiple tokens and a controlled number of concurrent uploads.</li><li>Flaky connections at huge scale: failures such as socket hang up are retried, then moved to error files and the retry queue.</li><li>Deep folder trees: folders are created before files so the original hierarchy is preserved in WorkDrive.</li><li>Very large files: chunked uploads that can resume after an interruption.</li><li>Visibility: a live dashboard shows what succeeded, what was skipped, what failed and what is waiting to retry.</li></ul>`;
}

const FEED = [["ok", "SUCCESS", "contract-scan-0412.pdf"], ["ok", "SUCCESS", "drawing-2271.tif"], ["ok", "SUCCESS", "invoice-1893.pdf"], ["skip", "SKIPPED", "report-0090.xlsx"], ["fail", "FAILED", "archive-5520.zip", "socket hang up"], ["ok", "SUCCESS", "photo-3318.jpg"], ["ok", "SUCCESS", "quote-7741.msg"], ["retry", "RETRY OK", "archive-5520.zip", "from retry queue"]];

export function initMig() {
  const root = g("mon"); if (!root) return;
  let cur = "a", n = 0, timer = 0, started = false;
  const q = (s) => root.querySelector(s);
  const paint = (k) => {
    cur = k; const r = RUNS[k];
    root.querySelectorAll("[data-run]").forEach((b) => b.classList.toggle("on", b.dataset.run === k));
    const s = g("monS"); s.textContent = r.status; s.className = "mon-s " + r.st;
    g("monBn").textContent = r.banner; g("monStart").textContent = r.start; g("monEnd").textContent = r.end;
    for (const [key, v] of Object.entries(r.k)) { const el = q(`[data-k="${key}"]`); if (key === "data") tween(el, v, { dec: 2, suf: " GB" }); else if (key === "speed") tween(el, v, { dec: 3, suf: " MB/s" }); else tween(el, v); }
    for (const [key, v] of Object.entries(r.m)) tween(q(`[data-m="${key}"]`), v, { dur: 900 });
    const t = r.k.total, up = (r.k.uploads / t) * 100, sk = (r.k.skipped / t) * 100, fl = (r.k.failed / t) * 100;
    g("bu").style.width = up + "%"; g("bs").style.width = sk + "%"; g("bf").style.width = fl + "%";
    g("monPct").textContent = ((r.k.uploads + r.k.skipped + r.k.failed) / t * 100).toFixed(0) + "%";
  };
  const addRow = () => {
    const f = FEED[n++ % FEED.length], row = document.createElement("div");
    row.className = "fr " + f[0];
    row.innerHTML = `<b>${f[1]}</b><span>${f[2]}</span><em>${f[3] || ""}</em>`;
    const feed = g("feed"); feed.prepend(row); while (feed.children.length > 6) feed.lastChild.remove();
  };
  root.querySelector(".mon-tabs").addEventListener("click", (e) => { const b = e.target.closest("[data-run]"); if (b) paint(b.dataset.run); });
  const start = () => { if (started) return; started = true; paint(cur); for (let i = 0; i < 4; i++) addRow(); if (!reduce) timer = setInterval(() => { if (!document.hidden) addRow(); }, 1500); };
  if ("IntersectionObserver" in window) new IntersectionObserver((en, io) => { if (en[0].isIntersecting) { start(); io.disconnect(); } }, { threshold: 0.25 }).observe(root); else start();
}
