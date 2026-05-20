# Trishira Developers — Website

A professional, fully responsive marketing website for **Trishira Developers**, a turnkey
construction company in Kanpur, Uttar Pradesh.

Built as a **static site** — fast, secure, SEO-friendly and hostable anywhere.

---

## ✨ Highlights

- **8 pages** — Home, About, Services, Packages, Contact + 3 package detail pages
  (Silver / Gold / Diamond)
- **Fully responsive** — designed mobile-first, looks great on phones, tablets and desktops
- **Fast & optimised** — static HTML export, self-hosted fonts, minimal JavaScript
- **SEO-ready** — per-page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`,
  structured data (JSON-LD)
- **Scalable** — all content lives in one file (`lib/data.ts`); package pages are generated
  automatically
- **Direct contact** — floating WhatsApp button, click-to-call and email links throughout

---

## 🛠 Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router, static export) |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS v4                     |
| Animation   | Framer Motion                       |
| Icons       | lucide-react + custom SVG glyphs    |
| Fonts       | Poppins + Inter (self-hosted)       |

---

## 🚀 Getting Started

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → open http://localhost:3000

# 3. Create a production build (static files land in `out/`)
npm run build
```

The `build` command produces a fully static site in the **`out/`** folder.

---

## 📁 Project Structure

```
app/                     Routes (one folder per page)
  layout.tsx             Root layout — fonts, metadata, navbar, footer
  page.tsx               Home page
  about/ services/ ...   Inner pages
  packages/[slug]/       Dynamic package detail pages
  sitemap.ts robots.ts   SEO files
components/
  layout/                Navbar, Footer, WhatsApp button
  home/                  Home hero
  sections/              Reusable sections (Why Choose Us, Process)
  packages/              Package detail layout
  ui/                    Buttons, cards, headings, logo, etc.
lib/
  data.ts                ⭐ ALL website content lives here
  packageTheme.ts        Per-package colour theming
  utils.ts               Small helpers
app/globals.css          Design tokens (colours, fonts, shadows)
```

---

## ✏️ Editing Content

**All text, packages, services and contact details are in [`lib/data.ts`](lib/data.ts).**
Edit that one file — no need to touch any components.

- Company phone, email, address, social links → `company` object
- Services → `services` array
- Packages (price, scope, materials, etc.) → `packages` array
- Why-choose-us, process steps, promises → respective arrays

Adding a new package to the `packages` array automatically creates its detail page.

Brand colours and fonts are defined in [`app/globals.css`](app/globals.css) under `@theme`.

---

## ⚠️ Before Going Live

Update these placeholder values:

1. **`SITE_URL`** in `lib/data.ts` — set it to your real domain.
2. **Social links** in `lib/data.ts` — `instagramUrl` and `facebookUrl` are best-guess URLs;
   replace them with the real profile links.
3. *(Optional)* Add real project photos — the site uses polished placeholder visuals; image
   slots can be added wherever you'd like real photography.

---

## ☁️ Deployment

### Vercel (recommended)

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — just click **Deploy**.
4. Add your custom domain in the project settings.

### Any other static host (Netlify, Hostinger, cPanel, GitHub Pages)

Run `npm run build` and upload the contents of the **`out/`** folder to your host.

---

© Trishira Developers. From Design to Delivery — Complete Turnkey Construction.
