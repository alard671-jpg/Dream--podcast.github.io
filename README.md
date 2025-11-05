# Dream Podcast (Website)

This repository contains a static website for "Dream Podcast" with bilingual (Arabic / English) support, Zeno.fm player integration, PWA manifest, contact form (Formspree ready), and responsive layout.

Key features:
- Arabic-first UI (RTL), with English toggle to LTR
- News tickers (Arabic & English) that scroll like TV crawl
- Zeno.fm embedded player
- Contact form with validation and Formspree support
- PWA manifest.json and robots.txt
- Mobile-friendly responsive design
- Placeholder folders for images, audio, video, fonts, libs

How to deploy:
1. Create the repository on GitHub.
2. Upload all files and folders exactly as in this tree.
3. Add your images under `images/` (logo.png, banners, etc.).
4. Replace the Formspree endpoint in `contact.html` with your own: `https://formspree.io/f/yourFormId`.
5. Enable GitHub Pages in repository settings (serve from main branch / root).
6. Wait ~60 seconds and open `https://<your-username>.github.io/<repo>/`.

Notes:
- Replace analytics placeholder with your tracking snippet if needed.
- Edit `manifest.json` icons and colors to match branding.
- Provide real content for legal pages (terms & privacy).

Prepared by: GitHub Copilot (project scaffolding)