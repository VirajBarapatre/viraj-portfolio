# Crisp Showcase — Portfolio

This repository is a polished portfolio template showcasing projects, skills, and contact information.

## Local development

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:8080 in your browser.

## Deployment suggestions

- Vercel: create a new project, point to this repo, and set the framework to `vite` / `static` if needed. Vercel will auto-detect.
- Netlify: connect repo and set build command `npm run build` and publish directory `dist`.

## Enhancements included

- Tailwind CSS + custom theme variables in `src/styles.css` for a Midnight Indigo aesthetic.
- Sticky, blurred header and ambient hero glow for a modern look.
- SEO meta tags in `src/routes/__root.tsx` and `src/routes/index.tsx`.
- `public/favicon.svg` branding.

## Next ideas (pick any to implement)

- Add an image gallery or case-study pages for each project.
- Add a lightweight CMS (e.g., Netlify CMS) to manage projects without code.
- Add analytics and performance optimizations for production.

If you want, I can implement any of the suggestions above. Which one should I do next? (or tell me design preferences: light/dark, color accent, font choices)