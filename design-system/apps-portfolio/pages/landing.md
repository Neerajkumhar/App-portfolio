# Page Override: Landing

This file overrides the Master file for the landing page.

## Direction

Warm image-led editorial, screenshot-first. The page follows the root `DESIGN.md` (Claude analysis) with a palette sampled from `public/About-img.png`: soft tan canvas, serif display headlines, humanist sans body, scarce gold actions, and floating screenshot shapes with no panels or device bodies. Pattern: **Portfolio Grid** — Hero (name and role) > filterable project grid > approach > about > capabilities > contact.

## Colors (override)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Canvas | `#FBF6EE` | `--color-canvas` |
| Surface soft | `#F5E6D2` | `--color-surface-soft` |
| Surface card | `#EFDCC1` | `--color-surface-card` |
| Cream strong | `#E4C7A2` | `--color-surface-cream-strong` |
| Ink | `#1A1819` | `--color-ink` |
| Body | `#363436` | `--color-body` |
| Muted | `#6C625A` | `--color-muted` |
| Muted soft | `#6A6058` | `--color-muted-soft` |
| Hairline | `#E3D1BA` | `--color-hairline` |
| Gold | `#BA8D59` | `--color-primary` |
| Gold action | `#8A5B3A` | `--color-primary-strong` |
| Gold text | `#774A2C` | `--color-primary-text` |
| Dark surface | `#1A1819` | `--color-surface-dark` |
| On dark | `#FADCB2` | `--color-on-dark` |

The About image anchors the tan-and-charcoal palette. About uses `About-img.png` in an arch-cropped left column with a tan/peach/charcoal palette. Dark gold is reserved for buttons, links, and active gallery state. Muted soft and gold text keep small labels and secondary text legible on warm surfaces. Screenshots supply the remaining colour.

## Typography

Cormorant Garamond at weight 400 for display headlines with negative letter-spacing; Inter at 400/500 for body, navigation, buttons, and labels. Keep body measure near 65 characters. Do not bold the serif.

## Radius and borders

8px radius on buttons and chips, 12px on project cards, pill radius on tags. Hairline borders separate cream surfaces. No shadows — depth comes from the cream ladder and the overlapping shape silhouettes.

## Preview shapes

Screenshots are the shapes: no cream panel behind the hero group and no dark phone body, bezel or notch around any preview. Five silhouettes — arch, capsule, squircle, slab and ticket — are assigned one per project. The hero uses the first three in a staggered fan with small rotations and offsets; the work grid repeats the same silhouettes with gentler rotations. Narrow screens reduce the fan angles so the group stays inside the viewport.

## Motion

Subtle only: 150-300ms transitions for background and colour, 300-400ms fade with a 12px rise on scroll entry. No parallax, no sticky scroll scrubbing, no auto-rotating carousels. All motion disabled under `prefers-reduced-motion`, with content rendered in its final state.

## Interaction

- Filter chips are native buttons with `aria-pressed`; active chips use cream-strong, and the count is decorative (`aria-hidden`).
- Cards show a serif index and industry label above the screenshot; cards are links with a visible focus ring, and hover changes background only.
- Primary actions use gold-action with cream text; hover does not introduce a fourth accent.
- Every clickable element has `cursor: pointer`.
- Keyboard focus stays fully visible; sticky navigation uses `scroll-padding-top`.

## Anti-patterns

No cool grays or pure white canvas. No bold serif display. No gold painted across large background areas. No shadows on About imagery or floating screenshots. No emojis as icons. No hidden work. No low-contrast muted text. No layout-shifting hovers. No invisible focus.
