// Downloads official product logos into images/icons/ (run at deploy time and locally).
// Zoho product logos come from Zoho's own static CDN; other brand icons come from Simple Icons.
// A failed download never blocks a deploy: the page hides any icon that is missing.
import { mkdir, writeFile } from "node:fs/promises";

const OUT = "images/icons";
const UA = { "user-agent": "Mozilla/5.0 (portfolio-build; +https://ganeshtadi.github.io/Portfolio/)" };
const ZOHO = ["crm", "creator", "books", "workdrive", "people", "recruit", "desk", "catalyst", "projects", "one", "flow", "mail", "inventory", "billing", "payroll", "learn"];
const SI = {
  nodedotjs: "339933", express: "000000", react: "61DAFB", javascript: "F7DF1E", firebase: "FFCA28", figma: "F24E1E",
  canva: "00C4CC", webflow: "146EF5", razorpay: "0C2451", googledrive: "4285F4", microsoftonedrive: "0078D4",
  bootstrap: "7952B3", vuedotjs: "4FC08D", html5: "E34F26", css3: "1572B6", bulma: "00D1B2"
};

const get = async (url) => {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.text();
};

await mkdir(OUT, { recursive: true });
const jobs = [
  ...ZOHO.map((n) => ({ file: `zoho-${n}.svg`, url: `https://www.zohowebstatic.com/sites/zweb/images/productlogos/${n}.svg`, fix: (s) => s })),
  ...Object.entries(SI).map(([n, c]) => ({ file: `si-${n}.svg`, url: `https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${n}.svg`, fix: (s) => s.replace("<svg ", `<svg fill="#${c}" `) }))
];
let ok = 0;
for (const j of jobs) {
  try {
    const body = j.fix(await get(j.url));
    if (!body.includes("<svg")) throw new Error("not an svg");
    await writeFile(`${OUT}/${j.file}`, body);
    ok++;
  } catch (e) {
    console.warn(`WARN ${j.file}: ${e.message}`);
  }
}
console.log(`icons: ${ok}/${jobs.length} downloaded`);
