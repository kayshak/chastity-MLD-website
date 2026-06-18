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

## Pages

| File               | Page                       | Notes                                            |
| ------------------ | -------------------------- | ------------------------------------------------ |
| `index.html`       | Homepage                   | Hero, RN authority block, services overview      |
| `about.html`       | About                      | `#meet` (Meet the RN) + `#mld` (What is MLD?)    |
| `general-care.html`| General Concierge Nursing  | Baseline services overview                       |
| `pre-post-op.html` | Pre & Post-Op Recovery     | Educational timeline — **no purchasable packages** (Phase 1) |
| `for-surgeons.html`| For Surgeons               | Referral value; Phase 2 portal placeholder       |
| `contact.html`     | Contact                    | Simple Name / Email / Message form               |

Navigation (minimal header with dropdowns):
**About** ▾ · **Concierge Services** ▾ · **For Surgeons** · **Contact**,
with social icons and a **Book Consultation** button on the right.

## File Structure

```
.
├── index.html
├── about.html
├── general-care.html
├── pre-post-op.html
├── for-surgeons.html
├── contact.html
├── css/styles.css
├── js/main.js
└── assets/            (drop final imagery here)
```

## Placeholders & Phase 2 Roadmap

Several intentional placeholders are wired in and marked with developer comments:

- **Book Consultation** buttons (`data-intakeq-placeholder`) — link to `#`,
  ready to point at the IntakeQ booking flow.
- **Social icons** — placeholder `href="#"`; swap in real profile URLs.
- **Imagery** — soft gradient `img-placeholder` blocks; replace with final photos
  (add files to `assets/`).
- **Meet the RN bio** — placeholder copy to be finalized from Chastity's source PDF.
- **Contact form** — Phase 1 is a no-op submit handler. Phase 2 adds
  pre-qualifying fields (Expected Surgery Date, Procedure Type, Referring Surgeon)
  and a real form handler.
- **For Surgeons** — Phase 2 secure physician portal (login, referral forms,
  downloadable post-op protocol PDFs).

All placeholder copy is professional, empathetic, and clinically careful — and
clearly framed as educational rather than medical advice.
