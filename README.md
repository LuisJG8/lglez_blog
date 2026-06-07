# Personal Blog Starter

This is a personal blog built with [Astro](https://astro.build). The original personal archive has been removed and replaced with placeholders.

## About

Replace the placeholders in this project with your own name, domain, bio, links, and posts.

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   │   └── ui/          # React components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment and CSP configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── LICENSE              # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `pnpm install`         | Installs dependencies                       |
| `pnpm run dev`         | Starts local dev server at `localhost:4321` |
| `pnpm run build`       | Build the production site to `./dist/`      |
| `pnpm run preview`     | Preview the build locally, before deploying |

## Deployment

This site is set up for deployment on Vercel. Connect your own GitHub repository to Vercel and update `SITE.website` in `src/consts.ts` to match your domain.

## License

This repository uses dual licensing:

- **Your blog posts**: choose your own license before publishing.
- **Code**: see the included [LICENSE](LICENSE).

See the [LICENSE](LICENSE) file for full details.

## Special Thanks

Special thanks to [Sat Naing](https://github.com/satnaing) for creating the excellent [AstroPaper theme](https://astro-paper.pages.dev/) that served as the foundation for this website. Their thoughtful design and clean architecture made it a joy to build upon.
