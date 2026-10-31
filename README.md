# Tadi Ganesh - Portfolio

Personal portfolio of **Tadi Ganesh** - Senior Zoho Developer, Full-Stack Developer and Node.js Integration Engineer (Hyderabad, India).

Live site: https://ganeshtadi.github.io/Portfolio/

## Sections
Home (career highlights) - About - Key Achievements - Technical Expertise - Zoho Platform Expertise - Experience - Projects (19, filterable, with detail pop-ups) - Education - Resume (page preview, Zoho WorkDrive link, PDF download) - Contact

## Tech
A single static page: plain HTML, CSS and JavaScript. No build step, no dependencies.
Mobile-first and responsive (tested at 360, 390, 768 and 1366 px wide).

## Structure
```
index.html                   the whole site (content lives in the data arrays near the bottom)
images/projects/*.jpg        project screenshots
images/resume-page-*.jpg     resume preview images
resume/Ganesh-Tadi-Resume.pdf
.github/workflows/pages.yml  deploys to GitHub Pages on every push to master
.nojekyll
```

## Edit content
Open `index.html` and edit the data arrays in the `<script>` block:
`EXP` (experience), `PROJ` (projects), `SKILLS`, `ACH` (achievements), `PLAT` (Zoho platform), `EDU` (education).
To show a **Live Demo** or **View Code** button on a project, add `demo:"https://..."` or `code:"https://..."` to its entry in `PROJ`.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploy
Pushing to `master` runs the Pages workflow. In the repo go to **Settings -> Pages -> Source: GitHub Actions** (one-time).

## Brand
Primary `#900C3F`, hover `#7A0A35`, tint `#FFF0F5`, accent `#C70039`.
