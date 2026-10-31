"""One-shot v4 patch. Every replacement must match exactly once, then each file's git blob SHA must equal the tested value."""
import subprocess, sys

def rd(p): return open(p, encoding="utf-8").read()
def sub(p, old, new):
    s = rd(p)
    if s.count(old) != 1:
        sys.exit(f"ABORT {p}: expected exactly 1 match, found {s.count(old)} for: {old[:70]!r}")
    open(p, "w", encoding="utf-8").write(s.replace(old, new))

sub("data.js", 'dur: "Mar 2023 - Oct 2025"', 'dur: "Feb 2023 - Oct 2025"')
sub("data.js", "Internship (Feb - Mar 2023): built Zoho Mail spam filtering with an 85% reduction",
    "Started at Nexivo in Feb 2023 with an internship: built Zoho Mail spam filtering with an 85% reduction")
sub("data.js", 'STATS = [["3.6+", "Years experience"]', 'STATS = [["4+", "Years experience"]')
sub("sections.js", 'per: "Mar 2023 - Oct 2025"', 'per: "Feb 2023 - Oct 2025"')
sub("sections.js", "const LOGO = {",
    'export const PHOTO = "public/images/projects/logos/Ganesh Tadi.png", AWARD = "public/images/projects/logos/Web Wizard Award.jpg";\nconst LOGO = {')
sub("index.html", '<link rel="stylesheet" href="v3.css">', '<link rel="stylesheet" href="v3.css">\n<link rel="stylesheet" href="v4.css">')
sub("index.html", '<a href="index.html#experience" data-id="experience">Experience</a>',
    '<a href="index.html#experience" data-id="experience">Experience</a><a href="index.html#awards" data-id="awards">Awards</a>')
sub("index.html", '<section class="sec alt" id="extensions">',
    '<section class="sec awd" id="awards" aria-labelledby="awT"><div class="wrap"><div id="awardsBody"></div></div></section>\n\n<section class="sec alt" id="extensions">')
sub("index.html", "(Nov 2025 - Oct 2026) and Lead Developer &amp; Full-Stack Developer at Nexivo, Hyderabad, where",
    "(Nov 2025 - Oct 2026) and Lead Developer &amp; Full-Stack Developer at Nexivo, Hyderabad (Feb 2023 - Oct 2025), where")
sub("index.html", "<li><b>🚚</b>4+ TB Files.com to WorkDrive migration</li></ul>",
    "<li><b>🚚</b>4+ TB Files.com to WorkDrive migration</li><li><b>🏆</b>Web Wizard Award, Nexivo 2025</li></ul>")
sub("index.html",
    '<div class="lg"><button type="button" class="lz blink" data-zoom="public/images/projects/logos/brandlogo.png" data-alt="Tadi Ganesh brand logo" aria-label="View brand logo larger"><img src="images/brandlogo.png" alt="" width="76" height="70"></button><div>',
    '<div class="lg"><button type="button" class="lz avt" data-zoom="public/images/projects/logos/Ganesh%20Tadi.png" data-alt="Tadi Ganesh" aria-label="View my photo larger"><img src="public/images/projects/logos/Ganesh%20Tadi.png" alt="Tadi Ganesh" width="84" height="84"></button><div>')
sub("index.html", '<div class="mq" aria-hidden="true"><div class="mq-t" id="mq"></div></div>',
    '<div class="mq" aria-hidden="true"><div class="mq-t" id="mq"></div></div>\n<nav class="qj" id="qj" aria-label="Jump to a section"></nav>')
sub("main.js", 'import { initUI, renderFooter, waLink, WA_DISPLAY } from "./ui.js";',
    'import { initUI, renderFooter, waLink, WA_DISPLAY } from "./ui.js";\nimport { awardsHTML, footerHTML, initQuickJump, initMobileBar } from "./v4.js";')
sub("main.js", "renderFooter();\n", "renderFooter();\nfooterHTML();\n")
sub("main.js", '  projects();\n  initExt(reveal);', '  $("awardsBody").innerHTML = awardsHTML();\n  initQuickJump();\n  initMobileBar();\n  projects();\n  initExt(reveal);')

TARGET = {"data.js": "2232546959037a838ac1933c93afed0097a6c178", "index.html": "01de6066db3ed1e6346ac2c1713b38b9b192f3cd",
          "main.js": "f3b30ae13e11dcdd04d09ea22f21dddba2eb15c2", "sections.js": "e63c7146f5b476ec0be6287997f3ba62db57dd9a"}
bad = [f for f, h in TARGET.items() if subprocess.check_output(["git", "hash-object", f]).decode().strip() != h]
if bad: sys.exit("ABORT: blob SHA mismatch after patch: " + ", ".join(bad))
print("v4 patch applied; all 4 files match the tested SHAs")
