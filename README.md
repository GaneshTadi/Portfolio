# Tadi Ganesh - Senior Zoho Developer Portfolio

Responsive static portfolio for **Tadi Ganesh, Senior Zoho Developer at Techworks Talent, Chennai**.

Live site: https://ganeshtadi.github.io/Portfolio/

## Structure
- `index.html` - home page (brief cards, each with a **View More** link)
- `detail.html` - detail page for responsibilities, experience and projects (`?type=resp|exp|project&id=...`)
- `styles.css`, `main.js` - design and behaviour
- `data.js` - responsibilities, experience, skills and contact content (edit text here)
- `images/brandlogo.png` - brand logo shown in the header, hero card and footer
- `src/data/projects.js` + `public/images/projects/logos/` - the 19 projects and their images (read in place by `main.js`)

No build step: the site is plain HTML, CSS and ES modules, deployed by `.github/workflows/pages.yml`.
