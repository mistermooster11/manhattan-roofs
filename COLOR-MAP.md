# Color Map: Enterprise Business Template (v1)
**Last Updated**: May 2026  
**Template**: Enterprise Business Template  
**Retheme Skill**: `pipemonkey-retheme` (pre-calibrated — no setup required)

---

## The Enterprise Palette (Default Colors)

These are the 5 core brand colors baked into this template. Every new client build starts from these values. If the client wants custom colors, the `pipemonkey-retheme` skill replaces these systematically.

| Role | Variable | Hex | Usage |
|------|----------|-----|-------|
| **Brand Orange** | `--color-brand-orange` / `--c-orange` | `#FD6A3C` | CTAs, buttons, highlights, accent borders |
| **Brand Navy** | `--color-brand-navy` / `--c-navy` | `#172535` | Feature section backgrounds, card backgrounds |
| **Topnav Dark** | *(hardcoded)* | `#101D2B` | TopNav background only |
| **Sky Accent** | `--color-brand-sky` / `--c-sky` | `#a1c5d3` | Secondary accents, hover states, dividers |
| **Light Gray** | `--color-brand-gray` / `--c-gray` | `#f2f2f2` | Section backgrounds, card fills |

**Additional palette values in `globals.css`:**
- `--color-brand-blue` / `--c-blue`: `#3f5e9d` — secondary blue, used sparingly
- `--c-border`: `#a5a5a5` — border color across components
- Body text: tied to `var(--c-navy)` in `globals.css` (the retheme skill corrects this to the hardcoded hex during a new client build)

---

## Where Each Color Appears

### `#FD6A3C` — Brand Orange
- All primary CTA buttons (`Get a Quote`, `Call Now`, etc.)
- Button hover states
- Accent underlines and highlight bars
- Icon accent color in HomeSectionWithLine bullets
- HomeCTA strip background
- Active nav indicator

**CSS variable**: `--color-brand-orange`, `--c-orange`  
**Files most affected**: `globals.css`, `components/layout/TopNav.tsx`, `app/page.tsx`, `styles/homepage.css`

---

### `#172535` — Brand Navy
- Feature section backgrounds (HomeSectionWithLine, Insights accordion background)
- Card backgrounds in dark-mode sections
- Footer background
- Body text color (via `var(--c-navy)` in `globals.css`)

**CSS variable**: `--color-brand-navy`, `--c-navy`  
**Files most affected**: `globals.css`, `styles/homepage.css`, `styles/craft-catalog.css`, `components/insights/InsightAccordionTabItem.tsx` (inline), `components/insights/InsightAccordionDataItem.tsx` (inline)

**⚠ Context-aware retheme**: Navy behaves differently depending on usage. The `pipemonkey-retheme` skill detects context:
- Background context → replace with client's FEATURE_BG color
- Text context → replace with client's BODY_TEXT color

---

### `#101D2B` — Topnav Dark
- TopNav component background only
- Not used elsewhere in the template
- Slightly darker than navy — creates visual separation between nav and page

**CSS variable**: None — hardcoded directly in `components/layout/TopNav.tsx`  
**Files most affected**: `components/layout/TopNav.tsx`

---

### `#a1c5d3` — Sky Accent
- Hover states on service cards
- Divider lines and subtle borders
- Secondary text accents in dark sections
- Link underline color in some contexts

**CSS variable**: `--color-brand-sky`, `--c-sky`  
**Files most affected**: `globals.css`, `styles/homepage.css`

---

### `#f2f2f2` — Light Gray
- Alternating section backgrounds (white ↔ gray rhythm)
- Card fill on light sections
- Input field backgrounds in contact form

**CSS variable**: `--color-brand-gray`, `--c-gray`  
**Files most affected**: `globals.css`, `app/contact/page.tsx`, `styles/homepage.css`

---

## CSS Variable Definitions (from `globals.css`)

```css
/* Long-form variables */
--color-brand-orange: #fd6a3c;
--color-brand-navy: #172535;
--color-brand-sky: #a1c5d3;
--color-brand-blue: #3f5e9d;
--color-brand-gray: #f2f2f2;

/* Shorthand aliases (same values) */
--c-orange: #fd6a3c;
--c-navy: #172535;
--c-sky: #a1c5d3;
--c-blue: #3f5e9d;
--c-gray: #f2f2f2;
--c-border: #a5a5a5;
```

Both sets of variables reference the same hex values — some components use long-form, some use shorthand. The `pipemonkey-retheme` skill sweeps both.

---

## How to Retheme a New Client Build

### Step 1 — Prepare the Client Color Map

Fill in the client's brand colors using this reference table. If the client doesn't have a distinct topnav color, use a slightly darker shade of their primary:

| Old Enterprise Color | Role | New Client Color |
|---------------------|------|-----------------|
| `#FD6A3C` | CTA / Primary | `#______` |
| `#172535` | Feature BG (navy bg context) | `#______` |
| `#172535` | Body Text (text context) | `#______` |
| `#101D2B` | Topnav Background | `#______` |
| `#a1c5d3` | Sky Accent | `#______` |

Note: Navy (`#172535`) gets **two** replacement values because the skill is context-aware. The "Feature BG" value replaces navy when it appears as a background color. The "Body Text" value replaces navy when it appears as a text color.

### Step 2 — Run the `pipemonkey-retheme` Skill

Invoke the skill from your Cowork session:

> "Retheme [client folder name] with these colors: primary `#XXXXXX`, feature bg `#XXXXXX`, body text `#XXXXXX`, topnav `#XXXXXX`, accent `#XXXXXX`"

The skill runs 3 sweeps automatically:
1. **Hex sweep** — replaces all hardcoded hex values in `.tsx`, `.ts`, `.css` files
2. **CSS variable text sweep** — replaces hex values inside CSS custom property declarations
3. **TSX inline style sweep** — replaces hex inside `style={{ }}` attributes

### Step 3 — Verify Known Offenders

After the retheme runs, manually verify these files (they have patterns the script may not catch on the first pass):

| File | Issue |
|------|-------|
| `components/insights/InsightAccordionTabItem.tsx` | Inline `style={{ backgroundColor: '#172535' }}` |
| `components/insights/InsightAccordionDataItem.tsx` | Inline `style={{ color: '#172535' }}` |
| `styles/homepage.css` | CSS variable text refs like `color: var(--c-navy)` where `--c-navy` may not be updated |
| `styles/craft-catalog.css` | Same CSS variable text ref issue |

---

## Color Accessibility Notes

- **Orange on white** (`#FD6A3C` on `#FFFFFF`): Contrast ratio ~3.2:1 — acceptable for large text/buttons, not for body text
- **White on navy** (`#FFFFFF` on `#172535`): Contrast ratio ~12:1 — excellent, use freely
- **White on topnav dark** (`#FFFFFF` on `#101D2B`): Contrast ratio ~15:1 — excellent
- **Navy on light gray** (`#172535` on `#f2f2f2`): Contrast ratio ~11:1 — excellent for body text

When retheme-ing for a client, verify their replacement colors maintain at minimum 4.5:1 for body text and 3:1 for large UI elements.

---

## Google Sheets Color Mapper

A companion `color-mapper-appscript.js` file is included in this template folder. This Apps Script auto-fills color preview swatches in column F when you enter a hex code in column E of your lead/client tracker spreadsheet.

**Setup:**
1. Open your Google Sheet client tracker
2. Go to Extensions → Apps Script
3. Paste the contents of `color-mapper-appscript.js`
4. Save and run `onEdit` trigger
5. Enter any hex code in column E — column F auto-fills with that color as background

Use this to visually preview client color palettes before running the retheme script.
