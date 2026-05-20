# Manhattan Roofing — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-05-20
Prospect: https://manhattanroofs.com/
Template: Enterprise-Business-Template
Reference site: N/A (template structure used as reference)

---

## Source Material Summary

- **Business name:** Manhattan Roofing
- **Owner:** George
- **Phone:** (212) 495-9840
- **Service area:** Manhattan, Brooklyn, Queens, The Bronx (NOT Staten Island)
- **Hours:** Mon–Fri 8am–6pm (TODO: confirm with client)
- **Differentiators extracted:** Owner-operated (George does the work himself), 30+ years construction experience, no subcontractors for repairs, free on-site estimates, warrantied workmanship, upfront pricing (quote before work starts), NYC DOB compliant
- **Services:** 10 roofing services extracted (see Service Inventory below)
- **Testimonials:** None found on prospect site — placeholders written (flagged TODO)
- **Social media:** None found on prospect site — flagged TODO in Footer
- **Google Business / address:** No fixed address listed — Maps embed centered on Manhattan as placeholder

---

## Service Inventory

1. Flat Roof Repair
2. Shingle Roof Replacement
3. Roof Leak Repair
4. Skylight Installation & Repair
5. Gutter Installation & Repair
6. Roof Inspection & Assessment
7. Storm Damage Repair
8. Flat Roof Coating & Waterproofing
9. Commercial Roofing
10. Emergency Roof Repair

All 10 services have matching slugs in `data/craft-catalog/crafts.ts` and full detail pages in `data/craft-catalog/service-pages.tsx`.

---

## Services Consolidated

None. All 10 services were kept as distinct entries. No merges performed.

---

## Pages Built & Content Decisions

### data/channel/manhattan-roofs.tsx (About Us / Channel page)
- Hero headline generated (no tagline on prospect site) — logged below
- Business description extracted from prospect's homepage copy (owner-operated, 30+ years, George)
- learnMore section: 4 subheadings reflecting key differentiators (Owner-Operated, Free Estimates, Warrantied Work, NYC DOB Compliant)
- 6 featured craftLinks: Flat Roof Repair, Roof Leak Repair, Shingle Roof Replacement, Gutter Installation & Repair, Skylight Installation & Repair, Emergency Roof Repair
- Testimonial: placeholder (TODO — no real reviews extracted from prospect site)
- flexFeature: Emergency/availability section using prospect's stated fast-response approach
- getInTouch: Contact CTA using (212) 495-9840

### data/craft-catalog/crafts.ts
- Replaced template's plumbing service list with all 10 Manhattan Roofing services
- Categories: "Roofing" for most; "Flat Roofing" for flat-roof-specific services; "Commercial" for commercial-roofing
- Disciplines: "Residential" + "Commercial" for inspection, storm damage, emergency; "Residential" only for skylight and shingle; "Commercial" only for commercial-roofing

### data/craft-catalog/service-pages.tsx
- 10 full service detail pages, each with overview, 3–4 body sections, CTA banner, and related services
- Copy: mix of extracted prospect language and generated trade-specific content where gaps existed
- All generated content logged in Copy Generation Log below

### data/programs.tsx
- 10 program cards replacing template's placeholder services
- Each card: title + 1 focused paragraph from prospect's service descriptions

### lib/constants/AccordionItems.tsx
- 4 accordion items for the homepage Insights section
- Topics: Flat Roof Repair, Roof Leak Repair, Shingle Roof Replacement, Storm Damage Repair
- Each item includes a description panel with process steps and CTA

### lib/constants/mainNavItems.ts
- 5-item flat nav: Home, Services, Service Areas, FAQs, Contact
- Confirmed already correct for roofing build — no changes needed

### components/custom/Hero.tsx
- New headline: "Manhattan's Roofing Specialists — Owner-Operated, 30+ Years Experience"
- Phone CTA: (212) 495-9840
- Replaced plumbing background image with manhattanroofs.com image

### components/custom/header/Topnav.tsx
- Phone bar updated to (212) 495-9840
- Tagline updated for roofing/free estimates

### components/custom/Footer.tsx
- Manhattan Roofing branding throughout
- 4 boroughs listed: Manhattan, Brooklyn, Queens, The Bronx (Staten Island removed)
- Social links: empty array (TODO)
- Copyright: ©2026 Manhattan Roofing

### components/custom/Announcements.tsx
- Section title: "Diagnosed, Quoted, and Fixed — Every Time"
- Image: topplumbernyc.com URL → manhattanroofs.com
- 3-step process rewritten for roofing: On-Site Inspection → Free Estimate → Repair & Clean Up
- CTAs: "Call for a Free Estimate" (tel:2124959840) + "See All Services"

### components/custom/Difference.tsx
- 3 trust stats: 30+ Years Experience, 4.8★ Rating (TODO: verify), Free On-Site Estimates
- Owner-operated framing used throughout

### components/custom/HomeCTA.tsx
- Headline: "Roof Problem? Get a Free On-Site Estimate"
- Phone: (212) 495-9840

### components/custom/Testimonial.tsx
- 3 placeholder testimonials written (all flagged TODO — no real reviews on prospect site)
- Heading: "What NYC Property Owners Say"

### components/custom/Insights.tsx
- Intro paragraph updated: "Manhattan Roofing handles all types of roofing work across Manhattan, Brooklyn, Queens, and The Bronx"

### components/custom/craft-catalog/CraftCatalogHero.tsx
- Description paragraph: updated to Manhattan Roofing / roofing / Manhattan, Brooklyn, Queens, The Bronx

### app/layout.tsx
- SITE_URL: `https://manhattanroofing.com` (TODO: confirm production domain)
- metadata title default: "Manhattan Roofing — Expert Roofing Services | NYC"
- metadata template: "%s | Manhattan Roofing"
- description: roofing, Manhattan + 3 boroughs, 30+ years, free on-site estimates
- alternates canonical: manhattanroofing.com (TODO)
- openGraph: all fields updated for Manhattan Roofing
- twitter card: summary_large_image
- images: topplumbernyc.com → manhattanroofs.com
- LocalBusiness JSON-LD `@type`: `"RoofingContractor"`
- JSON-LD name: "Manhattan Roofing", telephone: "+12124959840"
- No fixed address (service-area business) — streetAddress/postalCode/geo removed
- areaServed: 4 boroughs (Manhattan, Brooklyn, Queens, The Bronx)
- aggregateRating: 4.8 / 30 reviews (TODO: verify)
- openingHoursSpecification: Mon–Fri 8am–6pm (TODO: confirm with client)

### app/robots.ts
- Staging block: disallow all crawlers
- sitemap: `https://manhattanroofing.com/sitemap.xml` (TODO: update when domain confirmed)

### app/sitemap.ts
- BASE: `https://manhattanroofing.com` (TODO: update when domain confirmed)
- Routes: /, /craft-catalog, /service-areas, /contact-us, /general-faqs, /gallery, /blog + all 10 service slugs

### app/contact-us/page.tsx
- h2: "Get a Free On-Site Estimate"
- 4 borough service area cards (Staten Island removed)
- Full neighborhood lists per borough
- 10 roofing services in form dropdown
- Maps embed centered on Manhattan (TODO: replace with business-specific embed)
- Phone (212) 495-9840 throughout
- Map title: "Manhattan Roofing — Serving Manhattan & NYC Boroughs"

### app/service-areas/page.tsx
- 4 borough sections: Manhattan, Brooklyn, Queens, The Bronx (Staten Island section removed)
- Each section: headline, roofing-specific description, 4 callouts, neighborhood list
- h1: "Manhattan Roofing — Serving All NYC Boroughs"
- Phone (212) 495-9840

### app/general-faqs/page.tsx
- 8 FAQs covering: service area, free estimates, no subcontractors, licensing, NYC DOB compliance, emergency service, skylight work, warranty
- All answers reflect prospect's stated differentiators

### app/gallery/page.tsx
- 4 placeholder job cards: flat roof repair, shingle replacement, skylight installation, storm damage repair
- bgImage updated to manhattanroofs.com
- h1: "Roofing Work Across NYC"
- Phone (212) 495-9840

### app/blog/page.tsx
- 6 placeholder roofing post titles and excerpts: flat roof vs shingle, 5 signs you need replacement, storm damage, skylight installation, how to choose a NYC roofer, maintenance plans
- All flagged TODO for replacement with real content
- h1: "NYC Roofing Tips & Guides"
- Sub-heading: "From the Manhattan Roofing Team"

### app/craft-catalog/[slug]/page.tsx
- generateMetadata: `${data.title} — Manhattan Roofing`
- description updated for roofing / 4 boroughs
- CTA banner phone: (212) 495-9840
- RelatedCrafts description: Manhattan Roofing / roofing / 4 boroughs

### app/privacy-policy/page.tsx
- Business name: "Manhattan Roofing"
- Phone: (212) 495-9840 / tel:2124959840
- "roofing issue" (was "plumbing issue")
- Service area: Nassau County removed, The Bronx added

### Layout files (all page-level layout.tsx files)
- All metadata titles and descriptions updated to Manhattan Roofing / roofing theme
- Pages covered: contact-us, service-areas, general-faqs, gallery, blog, privacy-policy, craft-catalog

---

## Navigation Changes

| Change | Reason |
|--------|--------|
| Kept 5-item flat nav | Trade clients don't need complex nav; reduces friction for phone-call conversion |
| "Services" links to /craft-catalog | Standard for trade sites |
| "Service Areas" as top-level nav item | Roofing businesses rank on geo pages; makes service footprint prominent |
| No mega-dropdowns | Not appropriate for a local trade business |

---

## Copy Generation Log

All extracted copy came from https://manhattanroofs.com/. The following sections were generated due to genuine content gaps:

| Item | Location | Notes |
|------|----------|-------|
| Hero headline | Hero.tsx | Prospect had no tagline; generated from owner-operated + 30yr experience angle |
| 3 testimonials | Testimonial.tsx | No reviews on site; placeholder quotes written — must be replaced with real Google/Yelp reviews |
| Gallery job cards | gallery/page.tsx | No gallery on prospect site; placeholder structure only |
| Blog post titles/excerpts | blog/page.tsx | No blog on prospect site; placeholder posts only |
| Service detail page body copy | service-pages.tsx | 10 pages written using extracted service names + roofing trade content library patterns |
| FAQ answers | general-faqs/page.tsx | Generated using prospect's stated differentiators as source for answers |
| Service area neighborhood lists | service-areas/page.tsx, contact-us/page.tsx | Borough coverage implied by site; specific neighborhood lists generated from standard NYC geography |
| Announcements 3-step process | Announcements.tsx | Extracted from prospect's stated process (inspect → quote → fix), restructured into step format |
| Accordion items (×4) | AccordionItems.tsx | Generated using extracted service names and prospect's process language |

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | ✅ Created — staging block active | Disallows all crawlers; update disallow to "/" → "/" removal for prod |
| sitemap.ts | ✅ Created | Covers all 10 service slugs + 7 standard routes; TODO: add production domain |
| LocalBusiness JSON-LD | ✅ Added to layout.tsx | `@type: "RoofingContractor"`, name, telephone, 4 boroughs as areaServed |
| Root metadata (title, description, OG, Twitter) | ✅ Complete | All fields populated with Manhattan Roofing content |
| Production domain | ⏳ TODO: confirm | Using `manhattanroofing.com` as placeholder — may differ |
| Business hours | ⏳ TODO: confirm with client | Placeholder: Mon–Fri 8am–6pm |
| OG image (1200×630) | ⏳ TODO: provide image | Using manhattanroofs.com URL as placeholder |

---

## Previous Client References Cleanup

All references to the prior template client (A&E NYC Plumbing) were fully replaced:

| Old Value | New Value | Files Updated |
|-----------|-----------|---------------|
| `(646) 392-7164` | `(212) 495-9840` | Hero.tsx, Topnav.tsx, Footer.tsx, HomeCTA.tsx, Announcements.tsx, all page files |
| `tel:6463927164` | `tel:2124959840` | All `<a href="tel:...">` links across all pages |
| `"A&E NYC Plumbing"` | `"Manhattan Roofing"` | All components, data files, layout files |
| `slug: "ae-nyc-plumbing"` | `slug: "manhattan-roofs"` | data/channel/manhattan-roofs.tsx, index.ts |
| `"Plumber"` (JSON-LD @type) | `"RoofingContractor"` | app/layout.tsx |
| Staten Island references | Removed entirely | service-areas/page.tsx, contact-us/page.tsx, Footer.tsx, layout.tsx |
| Nassau County references | Removed entirely | privacy-policy/page.tsx |
| Plumbing service dropdown options | 10 roofing services | contact-us/page.tsx |
| topplumbernyc.com image URLs | manhattanroofs.com URLs | Announcements.tsx, gallery/page.tsx, service-areas/page.tsx, blog/page.tsx |

**Dormant files** (`ae-nyc-plumbing.tsx`, `pipemonkeys.tsx`) remain in `data/channel/` but are NOT imported by `data/channel/index.ts`. They do not affect the active build. Flag for deletion before production deploy.

---

## TODOs for Client Before Launch

| # | Item | File | Notes |
|---|------|------|-------|
| 1 | Real customer / job site photos | gallery/page.tsx | Replace all 4 placeholder job cards with actual before/after photos |
| 2 | Hero background image | Hero.tsx | Currently using manhattanroofs.com WP upload URL — replace with self-hosted asset |
| 3 | Testimonials (×3) | Testimonial.tsx | Replace placeholder quotes with real Google/Yelp reviews with real names/locations |
| 4 | Google Maps embed | contact-us/page.tsx | Replace Manhattan-centered generic embed with business-specific service area embed |
| 5 | Social media URLs | Footer.tsx | Add Facebook, Instagram, Yelp, and Google Business links once confirmed |
| 6 | Contact form backend | contact-us/page.tsx | Form UI is built; backend submission handler / email forwarding needs to be wired up |
| 7 | Blog content | blog/page.tsx | Replace all 6 placeholder posts with real articles |
| 8 | Review count / rating stat | Difference.tsx, layout.tsx | Replace 4.8★ / 30-review placeholder with actual verified review count and platform |
| 9 | Production domain | robots.ts, sitemap.ts, layout.tsx | Replace `manhattanroofing.com` placeholder with confirmed production domain |
| 10 | Business hours | layout.tsx, Topnav.tsx | Confirm Mon–Fri 8–6 or actual hours; update JSON-LD and Topnav tagline |
| 11 | OG image (1200×630) | layout.tsx | Provide a branded social share image for Open Graph / Twitter cards |
| 12 | Email address | contact-us/page.tsx, privacy-policy/page.tsx | Confirm business contact email and replace TODO placeholder |
| 13 | Delete dormant channel files | data/channel/ | ae-nyc-plumbing.tsx, pipemonkeys.tsx — safe to delete before production deploy |
| 14 | Update robots.ts for production | app/robots.ts | Change `disallow: "/"` to `allow: "/"` when moving to production domain |
| 15 | Sitemap production domain | app/sitemap.ts | Replace `manhattanroofing.com` with confirmed production domain |
| 16 | Verify phone number | All files | Confirm (212) 495-9840 is the correct number before going live |
| 17 | Owner name confirmation | Announcements.tsx, FAQs | "George" used throughout — confirm preferred first name for client-facing copy |
