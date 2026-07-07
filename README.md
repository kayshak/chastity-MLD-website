# Chastity Concierge Nursing — Website

A premium "medical wellness" website for a Concierge Registered Nurse (RN)
specializing in Manual Lymphatic Drainage (MLD) and pre/post-operative care.
Built from the agreed-upon *Website Architecture & Builder Plan*.

The design establishes clinical authority and safety with high-fashion editorial
spacing — deliberately avoiding any "massage parlor" or "day spa" aesthetic.

## Tech

Static HTML, CSS, and a small amount of vanilla JavaScript — no build step,
no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Brand Guidelines

| Token            | Hex       | Usage                                            |
| ---------------- | --------- | ------------------------------------------------ |
| Crisp White      | `#FFFFFF` | Primary background, high negative space          |
| Pale Ice Blue    | `#E0F2F1` | Hero / callout / accent backgrounds              |
| Slate Gray       | `#708090` | Secondary headings, nav links, primary buttons   |
| Cool Taupe       | `#908F87` | Borders, subtle icons, secondary elements        |
| Dark Slate Gray  | `#2F4F4F` | Primary headings & body copy (high contrast)     |

- **Headings:** Playfair Display (serif), with Georgia fallback.
- **Body:** Helvetica Neue / Arial system sans-serif.

## Positioning

The build is **MLD-forward**: Manual Lymphatic Drainage and restorative wellness are
the headline, with the Registered Nurse credential kept as the clinical authority
behind the work. The five core focus areas are **MLD, wellness, nervous system
calming, pre/post-op recovery, and pre/post aesthetic surgery recovery**.

Dedicated *concierge nursing* services are intentionally deferred to a later phase
(intake/scheduling via Noterro); the "Concierge Nursing" wordmark is retained in the
logo, and a Phase-2 note flags the add-on on the Services page.

## Pages

| File               | Page         | Notes                                                            |
| ------------------ | ------------ | ---------------------------------------------------------------- |
| `index.html`       | Homepage     | MLD-forward hero, RN authority block, services overview          |
| `about.html`       | About        | `#meet` (Meet the RN) + `#mld` (What is MLD?)                    |
| `services.html`    | Services hub | Single page with anchored sections: `#mld`, `#calming`, `#recovery`, `#aesthetic`, `#pregnancy`. Educational — **no purchasable packages** (Phase 1) |
| `for-surgeons.html`| For Surgeons | Referral value; Phase 2 portal placeholder                       |
| `faq.html`         | FAQ          | Client-facing FAQ (lymphatic system, safety, prep, what to expect) |
| `contact.html`     | Contact      | Simple Name / Email / Message form                               |

Navigation (minimal header with dropdowns):
**About** ▾ · **Services** ▾ · **For Surgeons** · **FAQ** · **Contact**,
with social icons and a **Book Consultation** button on the right.

## File Structure

```
.
├── index.html
├── about.html
├── services.html
├── for-surgeons.html
├── faq.html
├── contact.html
├── css/styles.css
├── js/main.js
└── assets/            (drop final imagery here)
```

## Placeholders & Phase 2 Roadmap

Several intentional placeholders are wired in and marked with developer comments:

- **Booking** buttons (`data-noterro-booking`) — live, linking to the client's
  Noterro booking portal (`https://chastitybirdsongllc.noterro.com/`), opening
  in a new tab.
- **Facebook icon** — nav + footer icons carry `data-facebook` with a placeholder
  `href="#"`. Swap in the real Facebook page URL, and add that same URL to the
  `sameAs` array in each page's JSON-LD (`<script type="application/ld+json">`).
- **Business street address** — the `LocalBusiness`/`MedicalBusiness` JSON-LD includes
  city/region/country (Parker, CO, US) but no `streetAddress`/`postalCode` yet, and
  `geo` uses Parker's town-center coordinates. Add the exact address + lat/long when
  available for the strongest local-SEO / Google Business Profile match.
- **Imagery** — soft gradient `img-placeholder` blocks; replace with final photos
  (add files to `assets/`).
- **Meet the RN bio** — placeholder copy to be finalized from Chastity's source PDF.
- **Contact form** — Phase 1 is a no-op submit handler. Phase 2 adds
  pre-qualifying fields (Expected Surgery Date, Procedure Type, Referring Surgeon)
  and a real form handler.
- **For Surgeons** — Phase 2 secure physician portal (login, referral forms,
  downloadable post-op protocol PDFs).
- **Concierge nursing add-on** — Phase 2 service line; noted on the Services page,
  with intake/scheduling planned through Noterro.

All placeholder copy is professional, empathetic, and clinically careful — and
clearly framed as educational rather than medical advice.

## SEO & Local SEO

Every page carries a full search/social metadata layer:

- **Canonical URLs**, `author`, and `robots` (`index, follow, max-image-preview:large`).
- **Open Graph + Twitter cards** with a branded 1200×630 share image
  (`assets/og-image.png`), so link previews render on Facebook, iMessage, LinkedIn, etc.
- **Local SEO signals** — `geo.*` / `ICBM` meta and a `LocalBusiness` /
  `MedicalBusiness` JSON-LD entity (`#business`) with NAP (name, phone, email),
  Parker CO address, `areaServed`, `founder`, `knowsAbout`, and a service catalog.
- **Structured data** per page — `WebSite` (home), `Person` (about),
  `FAQPage` (faq, generated from the on-page Q&As), and `BreadcrumbList` on subpages.
- **Footer NAP block** on every page for consistent name/phone/address citations.
- **`robots.txt`** and **`sitemap.xml`** at the site root (update `sitemap.xml`
  `lastmod` dates when content changes).
- **Favicon + PWA** — `assets/favicon.svg`, PNG app icons, `apple-touch-icon.png`,
  `site.webmanifest`, and `theme-color`.

Brand icons/images are generated from HTML via Chromium; the source generator
lives outside the repo (not required at runtime — the built assets are committed).
When the production domain differs from `https://chastitybirdsongllc.com`,
find-and-replace it across the HTML `<head>`s, `sitemap.xml`, and `robots.txt`.
