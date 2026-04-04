# Design System Strategy: Precision & Presence

## 1. Overview & Creative North Star: "The Architectural Curator"

This design system is built upon the concept of **"The Architectural Curator."** Unlike traditional job portals that feel cluttered and transactional, this system treats career opportunities as high-end artifacts. We move away from the "list-heavy" template look and toward a sophisticated, MNC-grade editorial experience.

The aesthetic is defined by **expansive white space, structural red accents, and a rhythmic dot-grid foundation.** By utilizing intentional asymmetry—such as offsetting large headlines against a strict 24px grid—we create a layout that feels engineered yet breathable. This is not just a portal; it is a professional command center that balances the "Airy Minimalism" of a gallery with the "High-Performance Utility" of an ATS.

---

## 2. Color & Texture Strategy

Our palette is anchored in high-contrast prestige. We use deep blacks and vibrant reds to punctuate an otherwise ethereal, light-filled environment.

### Color Roles
*   **Primary (`#b7131a`):** The "Pulse." Used exclusively for high-intent actions and brand signals.
*   **Surface & Background (`#f8f9fa` to `#ffffff`):** The "Canvas." This range provides the airy, professional feel.
*   **Inverse Surface (`#0D0D0D` / `#2e3132`):** The "Anchor." Use these deep black panels for sidebars or footers to provide structural weight.

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders are prohibited for sectioning.** Do not use lines to separate the header from the body or columns from each other. Instead:
*   **Tonal Shifts:** Place a `surface_container_low` section against a `surface` background.
*   **Texture:** Use the signature Dot Grid (`#d1d5db` at 24px intervals) to define the workspace area, allowing the grid itself to act as the visual boundary.

### Glass & Gradient Rule
For floating elements like "Quick Apply" bars or navigation overlays, utilize **Glassmorphism.** Apply a semi-transparent `surface_container_lowest` (90% opacity) with a `20px` backdrop-blur. For primary CTAs, use a subtle linear gradient from `primary` (`#b7131a`) to `primary_container` (`#db322f`) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography: The Editorial Voice

We utilize **Inter** as a singular, powerhouse typeface. Its neutrality allows the layout's structure to speak.

*   **Display (48px/700):** Used for "Hero" moments. Use tight letter-spacing (-0.02em) to create an authoritative, MNC-grade presence.
*   **Headlines (32px/600):** Used for section titles. These should always be paired with generous top-margin to let the content breathe.
*   **Body (15px/400):** Optimized for readability in ATS environments. We favor a slightly increased line-height (1.6) to ensure long job descriptions don't feel overwhelming.
*   **Labels (12px/700 uppercase):** Used for metadata (e.g., "FULL TIME," "REMOTE"). This adds a "form-factor" technical feel to the editorial layout.

---

## 4. Elevation & Depth: Tonal Layering

Standard drop shadows are too "web-standard" for this system. We achieve depth through physical stacking concepts.

*   **The Layering Principle:** Treat the UI as layers of fine paper. 
    *   **Level 0:** The Dot Grid (`background`).
    *   **Level 1:** Content Sections (`surface_container_low`).
    *   **Level 2:** Interactive Cards (`surface_container_lowest`).
*   **Ambient Shadows:** If a card must float, use an "Ambient Shadow": `box-shadow: 0 12px 40px rgba(13, 13, 13, 0.04);`. It should feel like a soft glow of light, not a dark stain.
*   **The Ghost Border:** For accessibility in forms, use the `outline_variant` at **15% opacity**. This creates a "suggestion" of a container without breaking the airy aesthetic.

---

## 5. Component Signature Styles

### Buttons
*   **Primary:** Solid `primary` red, 8px radius. On hover, transition to `primary_container` over 0.15s.
*   **Ghost:** 1px border using `outline_variant` (20% opacity) with `secondary` text. No background fill.
*   **Interaction:** All buttons must feel "snappy." Use `cubic-bezier(0.4, 0, 0.2, 1)`.

### Cards & ATS Lists
*   **Strict Rule:** No divider lines. Separate job entries using `32px` of vertical white space or a subtle background toggle between `surface` and `surface_container_low`.
*   **Radius:** 8px (`DEFAULT`) is the standard. Avoid rounded pills unless used for status chips.

### ATS Inputs & Search
*   **Input Fields:** Minimalist. Only a bottom border (2px) that transforms from `outline_variant` to `primary` red on focus. Labels should float or sit in `label-sm` style above the field.

### Status Chips
*   **Selection:** Use light tonal fills (e.g., `primary_fixed`) with `on_primary_fixed` text. Avoid high-saturation backgrounds for secondary information.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use the Dot Grid as a layout guide. Align text edges to grid intersections.
*   **Do** allow elements to overlap slightly (e.g., a card bleeding over a section break) to create a custom, layered feel.
*   **Do** use thin-stroke icons (1px or 1.5px) to match the Inter typography weight.

### Don't:
*   **Don't** use 100% black text on white. Use `on_surface` (`#191c1d`) for a softer, more premium contrast.
*   **Don't** use "Card-in-Card" layouts with borders. Use tonal shifts to show nesting.
*   **Don't** crowd the interface. If a screen feels "busy," increase the white space by 20% before removing content.

---

## 7. Technical Implementation: The Grid

The background is a living part of the UI. Implement via CSS to ensure crispness at all zoom levels: