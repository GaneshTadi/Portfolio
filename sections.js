/* v3 sections: Hyderabad companies, experience logos, Zoho/product logos, Node.js flow, animated Growth at Nexivo.
   Wraps extras.js (unchanged) and overrides the pieces that changed. */
import { I, esc, logoBtn, iconImg } from "./icons.js";
import { patchData as basePatch, migBlock as baseMig } from "./extras.js";
import { EXTS } from "./extensions.js";
export { MORE_PROJECTS, initExt, extDetailParts, initMig } from "./extras.js";

/* Project images, matched by name to the dashboard images in public/images/projects/logos/.
   This map is the single source of truth; legacy image fields in src/data/projects.js are ignored. */
export const IMG = {
  1: "public/images/projects/logos/Website.png",
  2: "public/images/projects/logos/zoolancer.png",
  3: "public/images/projects/logos/Zoom Backup Dashboard Overview.png",
  4: "public/images/projects/logos/Email Validation.jpg",
  5: "public/images/projects/logos/Aadhar verifier.jpg",
  6: "public/images/projects/logos/Modern PAN Verification Dashboard.png",
  7: "public/images/projects/logos/Business PAN verifier.jpg",
  8: "public/images/projects/logos/Zoho CRM–OneDrive File Sync Workflow.png",
  9: "public/images/projects/logos/Zoho CRM and WorkDrive File Sync.png",
  10: "public/images/projects/logos/Zoho CRM Address Finder Interface.png",
  11: "public/images/projects/logos/_Credit Score Check with D&B.jpg",
  12: "public/images/projects/logos/_Sales Trip Planner in Zoho CRM.jpg",
  13: "public/images/projects/logos/Zoho Deal to Project Mapping Dashboard.png",
  14: "public/images/projects/logos/EPFO search.jpg",
  15: "public/images/projects/logos/Manufacturing ERP Dashboard Overview.png",
  16: "public/images/projects/logos/Zoho Healthcare Management Dashboard.png",
  17: "public/images/projects/logos/Zoho One Pharmaceutical Automation Workflow.png",
  18: "public/images/projects/logos/Zoho Hospitality Operations Dashboard.png",
  19: "public/images/projects/logos/Zoho One EdTech Dashboard Mockup.png",
  20: "public/images/projects/logos/Migration Overview Dashboard.png"
};
export const PHOTO = "public/images/projects/logos/Ganesh Tadi.png", AWARD = "public/images/projects/logos/Web Wizard Award.jpg";
const LOGO = { tw: "public/images/projects/logos/techworks-talent.svg", asm: "public/images/projects/logos/ASM.png", nx: "public/images/projects/logos/Nexivo.png" };
const FILES = "public/images/projects/logos/files-com.svg", WDL = "public/images/projects/logos/zohoworkdrive.png", NODE = "images/icons/si-nodedotjs.svg";
const ONERR = `onerror="this.style.display='none'"`;
const pic = (src, alt) => `<img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async" ${ONERR}>`;

export function patchData(EXP, CATS) {
  basePatch(EXP, CATS);
  const loc = { tw: "Chennai", asm: "Hyderabad, India", nx: "Hyderabad, India" };
  for (const e of EXP) { e.logo = LOGO[e.id]; if (loc[e.id]) e.loc = loc[e.id]; }
  const asm = EXP.find((e) => e.id === "asm"), nx = EXP.find((e) => e.id === "nx");
  if (asm) asm.all.unshift("ASM Process Automation is a Hyderabad-based company; I delivered Zoho One projects there for clients in India, UAE, Saudi Arabia and Oman");
  if (nx) nx.all.unshift("Nexivo is a Hyderabad-based Zoho Premium Partner; this is where I started in Zoho and grew to Lead Developer");
}

/* ---------- My role cards ---------- */
const ROLES = [
  { id: "tw", now: true, per: "Now", t: "Senior Zoho Developer", co: "Techworks Talent", loc: "Chennai", p: "Project manager and team lead for Zoho engagements: blueprint, scope, solutioning, client communication, Ideabox AI integration and extension development." },
  { id: "asm", per: "Nov 2025 - Oct 2026", t: "Zoho One Developer", co: "ASM Process Automation", loc: "Hyderabad, India", p: "Process automation across Zoho One for clients in India, UAE, Saudi Arabia and Oman, plus a 4+ TB Files.com to WorkDrive migration engine." },
  { id: "nx", per: "Feb 2023 - Oct 2025", t: "Lead Developer & Full-Stack Developer", co: "Nexivo, Zoho Premium Partner", loc: "Hyderabad, India", p: "Grew from Technical Developer to Senior Developer to Lead Developer of the product team. Built ZoomBackup.cloud and the Zoho extension portfolio." }
];
const LADDER = [["Step 1", "Technical Developer", "Built Zoho extensions and API integrations"], ["Step 2", "Senior Developer", "Owned larger builds and integrations end to end"], ["Step 3", "Lead Developer", "Led the product team at Nexivo"]];

export const ladHTML = () => `<div class="card lad rv"><div class="lad-h"><div class="lad-id">${logoBtn(LOGO.nx, "Nexivo", "logo-co")}<div><span class="eyebrow">Growth at Nexivo</span><h3>Technical Developer &rarr; Senior Developer &rarr; Lead Developer</h3><p class="loc">${I.pin}<span>Nexivo, Hyderabad, India</span></p></div></div><span class="lad-b">Product team</span></div>
<div class="lad-s">${LADDER.map(([s, t, d]) => `<div class="ls"><small>${s}</small><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}</div>
<div class="lad-ft"><div class="lad-rail" aria-hidden="true"><i></i><b style="--i:0"></b><b style="--i:1"></b><b style="--i:2"></b></div><ul class="lad-st">${LADDER.map(([, t], i) => `<li style="--i:${i}">${I.check}<span>${esc(t)}</span></li>`).join("")}</ul><p class="lad-note">${I.spark}<span>Three levels at Nexivo, ending as Lead Developer of the product team</span></p></div></div>`;

export function roleHTML() {
  return `<div class="ol">${ROLES.map((r) => `<article class="card rcard rv tilt${r.now ? " now" : ""}"><div class="rtop">${logoBtn(LOGO[r.id], r.co.split(",")[0], "logo-co")}<span class="per">${I.cal}<span>${esc(r.per)}</span></span></div><h3>${esc(r.t)}</h3><div class="co">${I.building}<span>${esc(r.co)}</span></div><div class="loc">${I.pin}<span>${esc(r.loc)}</span></div><p class="desc">${I.doc}<span>${esc(r.p)}</span></p><a class="more" href="detail.html?type=exp&id=${r.id}">View More <span>&rarr;</span></a></article>`).join("")}</div>${ladHTML()}`;
}

/* ---------- ASM section ---------- */
const ASM_STATS = [["4", "Countries served"], ["7", "Zoho One functions"], ["4+ TB", "Data migrated"], ["3 Cr+", "Files moved"]];
const Z = (n) => `images/icons/zoho-${n}.svg`;
const ASM_TILES = [
  [Z("creator"), "Zoho Creator", "Multi-country Expense Management", "Creator app with 2-level approvals and dashboards, integrated with People, CRM, Projects and Books."],
  [Z("people"), "Zoho People", "Zoho People HRMS", "HR policies, labor-law compliance, shifts, attendance, payroll alignment and employee lifecycle automation."],
  [Z("crm"), "Zoho CRM", "CRM as the data hub", "Zoho CRM acts as a central multi-country hub that triggers country-specific Books and Projects instances."],
  [Z("books"), "Zoho Books", "Zoho Books for 4 countries", "India, UAE, Saudi Arabia and Oman configured for tax, invoicing and statutory compliance."],
  [Z("payroll"), "Zoho Payroll", "India payroll", "Salary structures, custom payslips and statutory settings set up end to end."],
  [Z("learn"), "Zoho Learn", "Training in Zoho Learn", "Structured training programs so teams adopt the automated processes."]
];
export const asmHTML = () => `<div class="asm-co rv">${logoBtn(LOGO.asm, "ASM Process Automation", "logo-co")}<p class="loc">${I.pin}<span>ASM Process Automation, Hyderabad, India</span></p></div>
<div class="asm-st">${ASM_STATS.map(([n, l]) => `<div class="st rv"><b data-cu="${esc(n)}">${esc(n)}</b><span>${l}</span></div>`).join("")}</div>
<div class="asm-g">${ASM_TILES.map(([ic, nm, t, d]) => `<article class="at spot rv"><span class="ai">${iconImg(ic, nm, 30)}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join("")}</div>
<div class="mf rv"><div class="mf-t"><span class="eyebrow">Featured build</span><h3>Files.com &rarr; Zoho WorkDrive migration engine</h3><p>A Node.js server that moved 4+ TB, over 3 crore files and 2 lakh folders, with multi-token uploads, a queue, chunked transfers and error-file retries.</p><div class="mf-b"><a class="btn btn-w" href="detail.html?type=project&id=20">View the project &rarr;</a><a class="btn btn-g" href="detail.html?type=exp&id=asm">ASM role details</a></div></div>
${flowHTML()}</div>`;

/* Files.com -> Node.js server -> Zoho WorkDrive, using the real logos */
const flowHTML = () => `<div class="flow" role="img" aria-label="Files.com sends data to the Node.js server, which uploads to Zoho WorkDrive"><div class="fn"><span class="fi">${pic(FILES, "Files.com logo")}</span>Files.com<small>Source</small></div><i class="fl"></i><div class="fn big"><span class="fi fi-n">${pic(NODE, "Node.js logo")}</span>Node.js server<small>Queue &middot; Tokens &middot; Retries</small></div><i class="fl"></i><div class="fn"><span class="fi fi-w">${pic(WDL, "Zoho WorkDrive logo")}</span>Zoho WorkDrive<small>Chunked upload</small></div></div>`;

const ARCH = [
  [pic(FILES, "Files.com logo"), "Files.com", "Source: folders and files read through the API", ""],
  [pic(NODE, "Node.js logo"), "Node.js server", "Orchestrator: builds the queue, keeps the state", " fi-n"],
  ["🔑", "Token pool", "Multiple tokens share the upload load", " fi-e"],
  [pic(WDL, "Zoho WorkDrive logo"), "Zoho WorkDrive", "Destination: folders recreated, files uploaded in chunks", " fi-w"]
];
const archHTML = () => `<div class="arch rv">${ARCH.map(([i, t, d, c], k) => `${k ? '<i class="fl"></i>' : ""}<div class="an"><b class="fi${c}">${i}</b><strong>${esc(t)}</strong><small>${esc(d)}</small></div>`).join("")}</div>\n`;
/* extras.js builds the migration page; swap its emoji diagram for the logo diagram and drop the missing screenshot slot */
export const migBlock = () => baseMig().replace(/<div class="arch rv">[\s\S]*?<\/div>\n(?=<div class="loop rv">)/, archHTML()).replace(/<figure class="shot rv">[\s\S]*?<\/figure>/, "");

/* ---------- Experience detail extras ---------- */
export function expExtra(id) {
  if (id === "nx") return `<h2>Growth path at Nexivo</h2>${ladHTML()}<h2>Extensions I built</h2><div class="card xlink rv"><div><b>${EXTS.length} Zoho extensions</b><span>KYC, validation, exchange-rate, sync and workflow extensions published on the Nexivo catalogue.</span></div><a class="btn btn-p" href="index.html#extensions">Browse extensions</a></div>`;
  if (id === "asm") return `<h2>Featured build</h2>${flowHTML().replace('class="flow"', 'class="flow flow-l"')}<div class="card xlink rv"><div><b>Files.com to Zoho WorkDrive migration</b><span>4+ TB, 3 crore+ files and 2 lakh+ folders moved with a Node.js engine, multi-token uploads, a queue and error-file retries.</span></div><a class="btn btn-p" href="detail.html?type=project&id=20">View project</a></div>`;
  return "";
}
