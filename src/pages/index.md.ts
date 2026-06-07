import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Luis Gonzalez

A personal blog about your work, projects, and notes.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Website: https://lglez.me/
- GitHub: https://github.com/LuisJG8

---

*This is the markdown-only version of this site.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
