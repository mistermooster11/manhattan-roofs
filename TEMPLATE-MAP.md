# Template Map: Enterprise Business Template (v1)
**Framework**: Next.js 16 App Router  
**Styling**: Tailwind CSS v4 + custom CSS (`styles/`)  
**Package Manager**: pnpm  
**Architecture**: Hybrid — primary client content lives in `/data/` files (data-driven); homepage sections, FAQs, contact, gallery, service areas, and blog are hardcoded inline in page/component files  
**Last Mapped**: May 2026 (v1 — initial Enterprise Business Template release)  
**Evolved From**: PipeMonkey-Redesign template  
**First Client Built**: AE NYC Plumbing (plumbing — Manhattan, Brooklyn, Queens)

---

## What Makes This the Enterprise Template

This is not just a content swap from PipeMonkey-Redesign. AE NYC Plumbing introduced structural changes that make this the new canonical base for premium trade business sites:

- **Refined homepage flow**: Hero → HomeSectionWithLine → Insights (accordion) → Testimonial → HomeCTA — tighter pacing, better conversion architecture
- **Upgraded nav + header**: TopNav with distinct `#101D2B` background, separate from section backgrounds
- **Dual color variable system**: Both `--color-brand-*` (long-form) and `--c-*` (shorthand) CSS variables defined in `globals.css`
- **Icomoon icon font**: Custom icon set (`/public/fonts/`) powering service icons — do not remove
- **Enhanced contact page**: Stacked layout — service area list + full contact form + embedded Google Map
- **Before/After gallery**: `/gallery` page with comparison slider — works out of the box
- **5-color brand palette**: Orange (CTA), Navy (feature bg), Topnav dark, Sky accent, Light gray — fully mapped and retheme-ready
- **Programs page**: `/programs` route driven by `data/programs.tsx` — easily adapted for any trade

---

## Quick Reference

This template ships for **premium local skilled trade businesses** targeting high-income markets. It has 11 pages/routes, a service detail dynamic route, a testimonial slider, a contact page with stacked service areas + form + map, and a before/after gallery.

**The key insight for repositioning:** Edit data files first — lowest risk, highest leverage. Then work through the hardcoded component list. Service detail pages are driven by `data/craft-catalog/service-pages.tsx` — one entry per slug. Register every new client in `data/channel/index.ts` or the About Us page will 404.

**Homepage section order:** Hero → HomeSectionWithLine (How It Works) → Insights (Services accordion) → Testimonial → HomeCTA (Call CTA strip). All five sections are active — edit each component directly.

---

## Pages & Routes

| Route | File | Type | Notes |
|-------|------|------|-------|
| `/` | `app/page.tsx` | Hardcoded | Hero, HomeSectionWithLine, Insights, Testimonial, HomeCTA |
| `/explore/[slug]` | `app/explore/[slug]/page.tsx` | Data-driven | Pulls from `data/channel/[slug].tsx`. Register slug in `data/channel/index.ts` |
| `/craft-catalog` | `app/craft-catalog/page.tsx` | Data-driven | Service overview list from `data/craft-catalog/crafts.ts` |
| `/craft-catalog/[slug]` | `app/craft-catalog/[slug]/page.tsx` | Data-driven | Pulls from `data/craft-catalog/service-pages.tsx` |
| `/programs` | `app/programs/page.tsx` | Data-driven | Pulls from `data/programs.tsx` |
| `/gallery` | `app/gallery/page.tsx` | Hardcoded | Before/after comparison slider — swap images in component |
| `/contact` | `app/contact/page.tsx` | Hardcoded | Service area list + form + embedded Google Map |
| `/service-areas` | `app/service-areas/page.tsx` | Hardcoded | Full service area coverage page |
| `/blog` | `app/blog/page.tsx` | Hardcoded | Blog index — placeholder posts hardcoded inline |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Hardcoded | Individual blog posts |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Hardcoded | Standard privacy policy copy — swap business name |

---

## Data Files (Edit First)

| File | What It Controls | Notes |
|------|-----------------|-------|
| `data/channel/[slug].tsx` | About Us page — full content, story, team, values | Create one file per client slug. Register in `data/channel/index.ts` |
| `data/channel/AccordionItems.tsx` | FAQ accordion items for About/Channel page | Edit Q&A pairs directly |
| `data/craft-catalog/crafts.ts` | Service cards on `/craft-catalog` overview | One entry per service: name, slug, icon, short description |
| `data/craft-catalog/service-pages.tsx` | Full service detail pages content | One entry per slug: full description, bullets, CTA. Must match slugs in `crafts.ts` |
| `data/programs.tsx` | Programs/offers page content | Edit program name, description, pricing or remove section |
| `lib/mainNavItems.ts` | Top navigation links | Edit nav labels and hrefs here |

---

## Hardcoded Components (Edit Directly)

| Component / File | What to Change |
|-----------------|----------------|
| `app/page.tsx` — Hero section | Headline, subheadline, CTA button text, hero image |
| `app/page.tsx` — HomeSectionWithLine | Section headline, 3–4 feature bullets with icons |
| `app/page.tsx` — Insights accordion | Service category names, accordion body copy |
| `app/page.tsx` — Testimonial | Customer quote, name, company, star rating |
| `app/page.tsx` — HomeCTA | CTA headline, phone number, button text |
| `components/layout/TopNav.tsx` | Logo, nav phone number, CTA button label |
| `components/layout/Footer.tsx` | Business name, address, phone, email, social links, copyright |
| `app/contact/page.tsx` | Phone, email, address, service area list, Google Map embed URL |
| `app/service-areas/page.tsx` | City/neighborhood list, coverage description |
| `app/gallery/page.tsx` | Before/after image pairs — swap `src` values |
| `app/blog/page.tsx` | Blog post titles, dates, excerpts, slugs |
| `app/blog/[slug]/page.tsx` | Blog post body content |
| `app/privacy-policy/page.tsx` | Business name, contact email, effective date |
| `components/home/HeroSection.tsx` | Hero background image, overlay settings |
| `components/common/PhoneButton.tsx` | Global phone number used in sticky CTA |
| `public/images/` | All client images — logo, hero, team, gallery, OG image |

---

## Navigation Structure

Defined in `lib/mainNavItems.ts`. Default nav items:
- Home `/`
- Services `/craft-catalog`
- About `/explore/[client-slug]`
- Programs `/programs`
- Gallery `/gallery`
- Blog `/blog`
- Contact `/contact`

TopNav also contains a phone number and "Get a Quote" CTA — edit in `components/layout/TopNav.tsx`.

---

## Image Slots

| Slot | Location | Recommended Size |
|------|----------|-----------------|
| Logo (nav + footer) | `public/images/logo.png` | 200×60px |
| Hero background | `public/images/hero-bg.jpg` | 1920×1080px |
| Hero foreground / truck | `public/images/hero-truck.png` | 800×600px transparent |
| About Us — team/crew | `public/images/team.jpg` | 1200×800px |
| About Us — owner headshot | `public/images/owner.jpg` | 600×600px |
| Gallery — before images (×3) | `public/images/before-1.jpg` etc. | 800×600px |
| Gallery — after images (×3) | `public/images/after-1.jpg` etc. | 800×600px |
| OG / social share image | `public/images/og-image.jpg` | 1200×630px |
| Service card icons | Icomoon font class or SVG | 48×48px / use icon class |

---

## Testimonial Slider

Located in `app/page.tsx` inline or `components/home/TestimonialSlider.tsx`. Contains hardcoded testimonial objects — typically 3–5 entries. Each entry: `quote`, `name`, `title`, `stars`. Swap all entries for new client.

---

## Contact Page Structure

`app/contact/page.tsx` renders a three-column stacked layout:
1. **Service Areas list** — hardcoded city/borough names
2. **Contact Form** — name, phone, email, message fields; form action targets your configured endpoint
3. **Google Map embed** — `<iframe>` with `src` pointing to Google Maps embed URL. Swap the `src` with client's business address embed link.

Form endpoint: configure in `lib/contactConfig.ts` or directly in the form component.

---

## TypeScript Notes

- All data files (`crafts.ts`, `service-pages.tsx`, `programs.tsx`) are typed — add new entries matching the existing interface shape exactly
- `data/channel/[slug].tsx` uses a `ChannelData` interface — match all required fields
- Slug registration in `data/channel/index.ts` is mandatory — missing entries cause 404s on the About page
- `lib/mainNavItems.ts` exports a typed array — match the `NavItem` interface when adding links

---

## Skill Compatibility

### `content-repositioner`
This skill is **template-agnostic** — it reads this `TEMPLATE-MAP.md` to drive the full repositioning workflow. No skill modifications required. The skill will:
- Use the Pages & Routes table to generate all page files
- Use the Data Files table to generate all data files
- Use the Hardcoded Components table as its editing checklist
- Use the Image Slots table for image sourcing
- Generate SEO scaffolding: `robots.ts`, `sitemap.ts`, LocalBusiness JSON-LD, root metadata with OG/Twitter tags

### `pipemonkey-retheme`
This skill is **pre-calibrated for this template**. The Enterprise Business Template colors are the skill's built-in defaults — no configuration required.

Default "old" colors the script targets:
- `#FD6A3C` / `#fd6a3c` — brand orange
- `#172535` — brand navy (feature backgrounds)
- `#101D2B` — topnav background
- `#a1c5d3` — sky accent

The skill applies context-aware navy replacement:
- Navy in background context → client's FEATURE_BG color
- Navy in text context → client's BODY_TEXT color

Run 3 sweeps per the skill instructions: hex script → CSS variable text sweep → TSX inline style sweep.

**Known inline style offenders** (require TSX sweep):
- `components/insights/InsightAccordionTabItem.tsx`
- `components/insights/InsightAccordionDataItem.tsx`

**Known CSS variable text offenders** (require CSS sweep):
- `styles/homepage.css`
- `styles/craft-catalog.css`

---

## Repositioning Checklist

### Step 0 — Scrub Previous Client Content (AE NYC Plumbing)

Before repositioning any new client into this template, grep and replace all AE NYC references:

```bash
# Find AE NYC Plumbing phone number
grep -r "7187491830" . --include="*.tsx" --include="*.ts" --include="*.css"

# Find business name references
grep -ri "ae nyc plumbing" . --include="*.tsx" --include="*.ts" --include="*.css" --include="*.md"
grep -ri "ae-nyc-plumbing" . --include="*.tsx" --include="*.ts"

# Find any leftover client images
ls public/images/
```

Replace all found instances with new client data before proceeding.

---

### Step 1 — Data Files (do these first)
- [ ] Create `data/channel/[new-client-slug].tsx` with full About Us content
- [ ] Register new slug in `data/channel/index.ts`
- [ ] Edit `data/channel/AccordionItems.tsx` — replace FAQ Q&A pairs
- [ ] Edit `data/craft-catalog/crafts.ts` — replace service entries (name, slug, icon, description)
- [ ] Edit `data/craft-catalog/service-pages.tsx` — replace service detail content for each slug
- [ ] Edit `data/programs.tsx` — replace programs/offers content
- [ ] Edit `lib/mainNavItems.ts` — update any nav labels or hrefs if needed

### Step 2 — Homepage Sections
- [ ] Hero — headline, subheadline, CTA text, hero image
- [ ] HomeSectionWithLine — section headline, feature bullets
- [ ] Insights accordion — service category names and body copy
- [ ] Testimonial — 3–5 real client testimonials (quote, name, title)
- [ ] HomeCTA — CTA headline, phone number, button text

### Step 3 — Layout Components
- [ ] `TopNav.tsx` — logo, nav phone number, CTA button label
- [ ] `Footer.tsx` — business name, address, phone, email, social links, copyright year

### Step 4 — Inner Pages
- [ ] Contact page — phone, email, address, service area list, Google Map embed URL
- [ ] Service Areas page — city/neighborhood list
- [ ] Gallery — swap before/after image pairs
- [ ] Blog — update or remove placeholder posts
- [ ] Privacy Policy — business name, contact email, effective date

### Step 5 — Global Phone Number
- [ ] `components/common/PhoneButton.tsx` — update sticky CTA phone

### Step 6 — Images
- [ ] Logo (`public/images/logo.png`)
- [ ] Hero background (`public/images/hero-bg.jpg`)
- [ ] Hero foreground (`public/images/hero-truck.png` or equivalent)
- [ ] Team/crew photo
- [ ] Owner headshot
- [ ] Gallery before/after pairs
- [ ] OG image (`public/images/og-image.jpg`)

### Step 7 — SEO Scaffolding
- [ ] `app/robots.ts` — set `sitemap` URL to client domain
- [ ] `app/sitemap.ts` — set `baseUrl` to client domain, list all routes
- [ ] `app/layout.tsx` — root metadata: title template, description, OG image, Twitter card
- [ ] LocalBusiness JSON-LD in `app/layout.tsx` or `app/page.tsx` — name, address, phone, geo coordinates, service area, hours
- [ ] Update `<html lang="">` locale if needed

### Step 8 — Brand Colors (if not using Enterprise defaults)
- [ ] Run `pipemonkey-retheme` skill — provide new client color map
- [ ] Verify 3 sweeps complete: hex → CSS variable text → TSX inline styles
- [ ] Check `InsightAccordionTabItem.tsx` and `InsightAccordionDataItem.tsx` inline styles
- [ ] Check `styles/homepage.css` and `styles/craft-catalog.css` CSS variable text refs

### Step 9 — Final QA
- [ ] All services match the real client's service list
- [ ] Zero instances of "AE NYC Plumbing", `7187491830`, or `ae-nyc-plumbing` remaining
- [ ] Phone number consistent across: TopNav, Footer, Contact, HomeCTA, PhoneButton, JSON-LD
- [ ] Social links updated or removed
- [ ] Google Map embed pointing to correct address
- [ ] All slugs registered in `data/channel/index.ts`
- [ ] TypeScript builds clean: `pnpm build`
- [ ] OG image and metadata set correctly
- [ ] Content brief generated and filed
