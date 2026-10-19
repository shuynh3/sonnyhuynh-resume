# sonnyhuynh-resume

About page for about.sonnyhuynh.dev (an intro with a downloadable resume). React 19 + Vite + TypeScript + Tailwind v4. Single scrolling page; no section nav.

## Design system
- Components and tokens come from `@sonnyhuynh/ui`, linked from `../sonnyhuynh-ui` (`file:` dependency). Change shared UI there, not here.
- Visual reference: https://claude.ai/artifact/UPMtNR95M2YJQ8PCsRdHaE — read its `project/README.md` before UI work.
- Only system utilities exist (`bg-sage`, `text-ink-muted`, `text-meta`, `font-mono`…); the default Tailwind palette and type scale are cleared on purpose.
- Separate sections with surfaces, not lines: sections are `bg-surface` panels on the page, cards inside them are `surface-muted` (the Card default). No borders under headings or around cards.
- Mono (`font-mono`) for headings, dates, tags and metadata; sans for prose. One `variant="primary"` Button per view.

## Commands
- `npm run dev`, `npm run build` (typechecks first), `npm run lint` (oxlint), `npm run typecheck`.
