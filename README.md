# Fern & Poch — Wedding Invitation

A single-page wedding invitation site with a Disney-inspired fairy-tale theme.

- **Wedding date:** Saturday, 09 January 2027, 6:00 PM — Hilton Sukhumvit Bangkok Hotel
- **Color palette:** navy (`#101a30`) & gold (`#c9a66b`) for the dark sections, cream (`#f8f3e8`) for the light sections — evokes an elegant storybook/fairy-tale feel
- **Theme:** Disney/fairy-tale, with a live countdown to the reception and "happily ever after" styling throughout

## Structure

- `index.html` — the full page markup, styles, and scripts
- `images/` — all photos, referenced by `index.html` via normal `<img src="images/...">` paths

## Galleries

Two masonry-style photo galleries, laid out by the JS in `index.html` (packs photos of any aspect ratio with no gaps, scales responsively):

1. **Disney prewedding shoot** (`images/gallery-disney-*.jpg`) — dark navy background, 17 photos from the Magic Kingdom shoot (castle, Main Street, carousel, character meet-and-greets, fireworks)
2. **Beach shoot** (`images/gallery-beach-*.jpg`) — light cream background, 7 photos from a golden-hour beach shoot

## Features

- Animated hero with countdown timer to the wedding
- Responsive masonry gallery layout (pure JS, no dependencies)
- RSVP form that compiles answers into a pre-filled `mailto:` link (no backend required)

## Workflow

This repo is for iterating on the design — edit `index.html`/`images/` and commit changes as normal. When the invitation is ready to send out, re-embed the images as base64 data URIs into a single self-contained HTML file for distribution.
