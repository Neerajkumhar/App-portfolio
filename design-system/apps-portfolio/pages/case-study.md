# Page Override: Case Study

This file overrides the Master file for case-study pages.

## Direction

A reading page built around one large screenshot and its gallery. Cream canvas, cream-card gallery stage, hairline separators, and a dark ending band. Pattern: header > overview > gallery > problem > what I studied > decisions > learnings and next.

## Colors

Use the landing override palette unchanged. The app icon sits in a cream-card tile at the header; screenshots use the store gallery, not a device frame. The active thumbnail border and inline links use `#8A5B3A`. The next-study block and footer use `#1A1819` with `#FADCB2` text.

## Typography

Cormorant Garamond at weight 400 for display headlines with negative letter-spacing; Inter at 400/500 for body, labels, and controls. Body measure capped near 70 characters. Section headings use one consistent size; do not vary weight to fake hierarchy.

## App identity and gallery

- The case header shows the official app icon, app name, and source attribution beside the study title.
- The gallery is store-style: one large screenshot preview in a cream card with a horizontal strip of small thumbnails below it.
- Thumbnails are native buttons with `aria-pressed` for the active image, a visible focus ring and descriptive labels.
- Active thumbnail uses a gold-action border; no other thumbnail changes colour.
- Arrow-key navigation between thumbnails, plus previous/next icon buttons as the pointer and keyboard equivalent.
- No auto-rotation. No swipe-only interaction.
- Each screenshot has descriptive alt text and a visible one-line credit naming the source and owner.

## Motion

Subtle 150-300ms crossfade when switching images. Disabled under `prefers-reduced-motion`, with an instant swap.

## Anti-patterns

No emojis as icons. No lightbox that traps focus. No image without alt text and credit. No low-contrast muted text. No invisible focus. No cool gray canvas.
