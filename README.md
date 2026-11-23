# ReachRyt Website

Website for **ReachRyt** — digital marketing and low-cost white-label WhatsApp solutions for schools, colleges and growing businesses.
ReachRyt is a brand of SAVANTEVO SOLUTIONS PRIVATE LIMITED, Coimbatore.

**Live site:** https://reachryt-official.vercel.app

## Tech

Plain static site — HTML, CSS and vanilla JavaScript. No build step, no frameworks, no dependencies.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page (hero with lead form, products, 360° hub, services slider, growth calculator, plan builder, industries, FAQ) |
| `about.html` | About ReachRyt |
| `services.html` | All services with "Get this" buttons |
| `whatsapp-white-label.html` | White-label WhatsApp platform, live brand preview, plans |
| `education.html` | Admission marketing for schools & colleges |
| `contact.html` | Contact page with WhatsApp lead form |
| `privacy-policy.html`, `terms.html` | Legal pages |
| `style.css` | All styles (light + dark mode) |
| `main.js` | Header, footer, lead drawer, animations, sliders, calculator and all interactive features |

## Run locally

```bash
python3 -m http.server 8000
```
Then open http://localhost:8000 — or just double-click `index.html`.

## Edit common details

Open `main.js` and edit the `SITE` object at the top:

```js
const SITE = {
  wa: "918825992769",          // WhatsApp number for all lead forms
  waDisplay: "+91 88259 92769",
  email: "",                   // add business email
  instagram: "#",              // replace with real Instagram URL
  logo: "...",                 // logo for light backgrounds
  logoDark: "..."              // logo for dark backgrounds
};
```

All forms send the enquiry to WhatsApp (`wa.me`) with the visitor's details pre-filled.

## Deploy

Deployed on Vercel. To redeploy: drag this folder onto https://vercel.com/new (choose "Deploy to an existing project"), or run `npx vercel --prod` inside the folder.
