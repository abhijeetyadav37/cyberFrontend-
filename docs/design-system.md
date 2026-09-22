# CyberSaarthi Frontend — Design System

Single-source design tokens live in `src/styles/globals.css`. Phase 1 establishes
a light, institutional public-sector visual foundation. Components consume these
tokens rather than introducing page-specific colours.

## Design direction

- Light/white workspace with restrained institutional navy.
- Strong information hierarchy and clear section boundaries.
- Minimal decoration; no dark dashboard canvas, neon accents, glassmorphism, or excessive gradients.
- Indian public-sector references are subtle: restrained navy, small tricolour reference where appropriate, and formal information density.
- Status colours remain semantic and are not used as decorative accents.

## Colour tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-background` | `#f7f9fb` | Application canvas |
| `--color-surface` | `#ffffff` | Cards / panels / navigation |
| `--color-surface-2` | `#f1f4f7` | Secondary wells / table rows |
| `--color-surface-3` | `#e8edf2` | Hover / selected controls |
| `--color-border` | `#d7dee6` | Standard separators |
| `--color-border-strong` | `#b8c4d0` | Emphasis separators |
| `--color-foreground` | `#18212b` | Primary text |
| `--color-muted` | `#526171` | Secondary text |
| `--color-dim` | `#6b7785` | Captions / tertiary text |
| `--color-accent` | `#174a7e` | Primary institutional action |
| `--color-accent-strong` | `#123b66` | Hover / active accent |
| `--color-accent-soft` | `rgba(23, 74, 126, 0.10)` | Accent fills |
| `--color-success` | `#18794e` | Successful / verified state |
| `--color-info` | `#2563a6` | Informational state |
| `--color-critical` | `#b42318` | Critical / destructive state |

## Geometry

Corner radii are intentionally restrained:

- `sm`: 4px
- `md`: 6px
- `lg`: 8px
- `xl`: 10px

The redesign should prefer borders, spacing and typography over floating/shadow-heavy cards.

## Accessibility and motion

The existing focus-visible treatment and `prefers-reduced-motion` behaviour are
preserved. Interactive controls should maintain visible keyboard focus and
sufficient contrast.

## Architecture preserved

Phase 1 does not alter routing, API contracts, state management, authentication,
RBAC, business logic, or the Android application. Existing UI components continue
to consume the same semantic token names so later phases can redesign the shell
and pages incrementally.
