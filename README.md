# Portfolio

Source of my portfolio site — [adam-gibson.netlify.app](https://adam-gibson.netlify.app/).

Astro 6, static output, deployed on Netlify. No framework integrations.

## Requirements

- Node >= 22.12 (Astro 6)
- pnpm (the lockfile is pnpm — `npm` and `yarn` will fight it)

## Scripts

```bash
pnpm install          # install dependencies
pnpm dev              # local dev server
pnpm build            # build static site to ./dist/
pnpm preview          # preview the built site
pnpm astro check      # type-check .astro files and content collections
```

No test runner or linter is configured. Formatting is Prettier with
`prettier-plugin-astro` — run `pnpm exec prettier --write <path>`.

## Adding a project

1. Add the project image to `src/assets/` (prefer `.webp` or `.avif`).
2. Drop a Markdown file into `src/content/work/`. Reference the image via a
   relative path, e.g. `img: ../../assets/my-project.webp`.
3. Frontmatter schema lives in `src/content.config.ts` — `img` is processed by
   Astro's `image()` helper, so the path must resolve from the Markdown file.

No code changes needed — `src/pages/work/[...slug].astro` generates a page for
every entry in the `work` collection.
