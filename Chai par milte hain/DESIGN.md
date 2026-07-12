---
name: Mehfil Chai Adda
colors:
  surface: '#fff8f5'
  surface-dim: '#e3d8d1'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef1eb'
  surface-container: '#f8ece5'
  surface-container-high: '#f2e6df'
  surface-container-highest: '#ece0da'
  on-surface: '#201a17'
  on-surface-variant: '#56423b'
  inverse-surface: '#362f2b'
  inverse-on-surface: '#fbeee8'
  outline: '#89726a'
  outline-variant: '#ddc1b7'
  surface-tint: '#9e421c'
  primary: '#953c16'
  on-primary: '#ffffff'
  primary-container: '#b5532c'
  on-primary-container: '#fff3ef'
  inverse-primary: '#ffb59b'
  secondary: '#466176'
  on-secondary: '#ffffff'
  secondary-container: '#c6e3fc'
  on-secondary-container: '#4a667b'
  tertiary: '#735200'
  on-tertiary: '#ffffff'
  tertiary-container: '#926900'
  on-tertiary-container: '#fff4e6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#7f2b05'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#adcae2'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#2e4a5e'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#f8bd42'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fff8f5'
  on-background: '#201a17'
  surface-variant: '#ece0da'
typography:
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  max-width: 1200px
---

## Brand & Style
The design system draws inspiration from the bustling, tea-stained streetscapes of 1960s Old Delhi. The aesthetic is "Warm Brutalism"—a mix of heavy, tactile structures and weathered, human-centric textures. It avoids the polished perfection of modern SaaS, opting instead for a busy, unpretentious atmosphere that feels lived-in and communal.

The visual language is built on the concept of the *Adda*: a place of conversation. This translates to high-density layouts, heavy brass dividers, and a tactile sense of materiality. Surfaces should feel like sun-drenched plaster, oxidized metal, and unglazed terracotta. Every element carries the weight of history, appearing slightly worn but structurally permanent.

## Colors
The palette is derived from the natural materials and aged architecture of the Walled City. All colors are desaturated to mimic the effect of dust and sun-bleaching.

- **Primary (Terracotta #B5532C):** The color of kulhars (clay cups). Used for primary actions and brand emphasis.
- **Secondary (Haveli Blue #2E4A5E):** Inspired by faded doorway paint. Used for structural navigation and stable elements.
- **Accent (Mustard #D9A227):** A bright, sun-faded yellow for highlights, notifications, and interactive flourishes.
- **Neutral (Soot #2A2420):** Not a pure black, but a carbon-based charcoal used for all text and heavy borders.
- **Background (Aged Paper #F0E4CC):** A warm, off-white base that reduces eye strain and provides a vintage foundation.

## Typography
The typography contrasts the ruggedness of hand-painted street signs with the scholarly warmth of 20th-century printing.

- **Headlines:** Use **Bricolage Grotesque**. Its idiosyncratic, slightly uneven character mimics the variable stroke widths of a sign-painter’s brush.
- **Body:** Use **Source Serif 4**. A sturdy, readable slab-serif that feels authoritative yet approachable, reminiscent of vintage newsprint.
- **Labels & Accents:** Use **Courier Prime**. This monospaced font represents typewriter receipts and chalk-written prices on a blackboard.

All text should be rendered with a slight "ink bleed" or soft edge where possible to avoid the sterile sharpness of digital rendering.

## Layout & Spacing
The layout follows a "Dense Modular" philosophy. Unlike modern minimal designs that prioritize empty space, this system embraces a "filled" aesthetic, reflecting the crowded vibrancy of a bazaar.

- **Grid:** A 12-column fixed grid on desktop, transitioning to a single column on mobile.
- **Dividers:** Instead of whitespace, use **Brass Lines** (2px solid Mustard with a slight metallic gradient) to separate sections.
- **Density:** Elements are packed closely. Gutters are kept tight (16px) to maintain a sense of urgency and community.
- **Margins:** Generous outer margins (40px) act as a "frame" for the busy content within, like a photograph on a textured wall.

## Elevation & Depth
Depth is created through physical layers and material properties rather than digital shadows.

- **Tonal Layering:** Use the Soot/Charcoal color for thick (3px-4px) borders to "punch" elements out of the background.
- **Weathered Plaster:** Containers should use subtle noise textures or CSS gradients to mimic uneven wall surfaces.
- **Inset Shadows:** Instead of drop shadows, use small, dark inset shadows on buttons and input fields to make them look stamped or carved into the surface.
- **Tin-Sheet Effect:** Secondary containers can use a very light horizontal brush texture to mimic corrugated tin roofs.

## Shapes
Shapes are functional and slightly "imperfect." Avoid perfect circles or high-radius pills.

- **Base Radius:** A subtle 4px (Soft) radius is applied to most containers to mimic the natural wear on the corners of a wooden table or stone block.
- **Irregularity:** Interactive elements should occasionally feature "chipped" corners (using clip-path) to reinforce the weathered, hand-made aesthetic.
- **Structural Lines:** Use heavy 2px or 3px strokes for all borders. Never use hairline (1px) borders, as they feel too modern and fragile.

## Components
Components should feel like physical objects found in a chai stall.

- **Buttons:** Rectangular with a 2px soot border and a 2px offset "hard shadow" in Terracotta. On hover, the button shifts 2px down and right to "press" into the shadow.
- **Input Fields:** Styled like ledger entries. A simple bottom border in Soot, with label text in Courier Prime appearing as if written on a line.
- **Cards:** High-contrast containers with Aged Paper backgrounds and Mustard brass-line headers. Use a subtle paper-grain texture overlay.
- **Chips/Tags:** Styled as "tokens" or "stamps." Small, rectangular, with a thick border and Courier Prime text.
- **Dividers:** Use the "Brass Line" (Mustard #D9A227) with a slight 1px Soot shadow beneath it to give it physical height.
- **Lists:** Bullet points are replaced with small Terracotta squares (mimicking tiles) or hand-drawn dashes.