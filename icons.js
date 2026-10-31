/* Inline SVG icons + product-logo helpers (logos live in images/icons/, fetched at deploy time). */
const s = (b) => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${b}</svg>`;
const f = (d) => `<svg class="ico ico-f" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;

export const I = {
  cal: s('<rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M8 2.5v4M16 2.5v4M3 10h18"/>'),
  pin: s('<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/>'),
  building: s('<rect x="4" y="3" width="11" height="18" rx="1.5"/><path d="M15 9h4a1 1 0 0 1 1 1v11h-5M8 7h3M8 11h3M8 15h3"/>'),
  doc: s('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>'),
  mail: s('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>'),
  phone: s('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
  close: s('<path d="M6 6l12 12M18 6 6 18"/>'),
  send: s('<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>'),
  up: s('<path d="M12 19V5M5 12l7-7 7 7"/>'),
  check: s('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  spark: s('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'),
  file: s('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>'),
  wa: f("M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"),
  linkedin: f("M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"),
  github: f("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12")
};

const IC = "images/icons/", LG = "public/images/projects/logos/";
/* label pattern -> [logo file, display name]; first match wins */
const TECH = [
  [/zoho one/i, IC + "zoho-one.svg", "Zoho One"], [/crm/i, IC + "zoho-crm.svg", "Zoho CRM"], [/recruit/i, IC + "zoho-recruit.svg", "Zoho Recruit"],
  [/creator/i, IC + "zoho-creator.svg", "Zoho Creator"], [/books/i, IC + "zoho-books.svg", "Zoho Books"], [/payroll/i, IC + "zoho-payroll.svg", "Zoho Payroll"],
  [/people/i, IC + "zoho-people.svg", "Zoho People"], [/workdrive/i, IC + "zoho-workdrive.svg", "Zoho WorkDrive"], [/catalyst/i, IC + "zoho-catalyst.svg", "Zoho Catalyst"],
  [/desk/i, IC + "zoho-desk.svg", "Zoho Desk"], [/zoho projects/i, IC + "zoho-projects.svg", "Zoho Projects"], [/inventory/i, IC + "zoho-inventory.svg", "Zoho Inventory"],
  [/billing/i, IC + "zoho-billing.svg", "Zoho Billing"], [/zoho mail/i, IC + "zoho-mail.svg", "Zoho Mail"], [/zoho learn/i, IC + "zoho-learn.svg", "Zoho Learn"],
  [/node/i, IC + "si-nodedotjs.svg", "Node.js"], [/express/i, IC + "si-express.svg", "Express.js"], [/react/i, IC + "si-react.svg", "React"],
  [/^javascript$/i, IC + "si-javascript.svg", "JavaScript"], [/firebase/i, IC + "si-firebase.svg", "Firebase"], [/figma/i, IC + "si-figma.svg", "Figma"],
  [/canva/i, IC + "si-canva.svg", "Canva"], [/webflow/i, IC + "si-webflow.svg", "Webflow"], [/razorpay/i, IC + "si-razorpay.svg", "Razorpay"],
  [/bootstrap/i, IC + "si-bootstrap.svg", "Bootstrap"], [/vue/i, IC + "si-vuedotjs.svg", "Vue.js"],
  [/^html$/i, IC + "si-html5.svg", "HTML5"], [/^css$/i, IC + "si-css3.svg", "CSS3"], [/bulma/i, IC + "si-bulma.svg", "Bulma"],
  [/files\.com/i, LG + "files-com.svg", "Files.com"], [/onedrive|microsoft graph/i, IC + "si-microsoftonedrive.svg", "Microsoft OneDrive"]
];
const HIDE = `onerror="this.style.display='none'"`;
export const esc = (x) => String(x).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const techIcon = (label) => { const m = TECH.find((t) => t[0].test(label)); return m ? { src: m[1], name: m[2] } : null; };
export const iconImg = (src, name, size = 22) => `<img src="${src}" alt="${esc(name)}" width="${size}" height="${size}" loading="lazy" decoding="async" ${HIDE}>`;

/* row of product icons for a project card */
export function techStrip(list, max = 6) {
  const seen = new Set(), out = [];
  for (const l of list) { const t = techIcon(l); if (t && !seen.has(t.src)) { seen.add(t.src); out.push(t); } }
  if (!out.length) return "";
  return `<ul class="tech-ic" aria-label="Built with">${out.slice(0, max).map((t) => `<li title="${esc(t.name)}">${iconImg(t.src, t.name, 24)}</li>`).join("")}</ul>`;
}
/* chips, each with its product icon when one is known */
export const chipsI = (a) => `<div class="chips">${a.map((x) => { const t = techIcon(x); return `<span>${t ? iconImg(t.src, "", 14) : ""}${esc(x)}</span>`; }).join("")}</div>`;
/* logo that opens the lightbox on click (hover zoom + blink handled in v3.css) */
export const logoBtn = (src, name, cls = "") => `<button type="button" class="lz ${cls}" data-zoom="${src}" data-alt="${esc(name)} logo" aria-label="View ${esc(name)} logo larger"><img src="${src}" alt="" loading="lazy" decoding="async"></button>`;
