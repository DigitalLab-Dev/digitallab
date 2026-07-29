import GithubSlugger from 'github-slugger';

// rehype-sanitize's default (GitHub) schema clobber-prefixes id/name/
// ariaLabelledBy/ariaDescribedBy with this string as an anti-DOM-clobbering
// measure, so the ids rehype-slug assigns to headings never end up as
// exactly what's in the markdown - TOC hrefs need the same prefix to
// actually match the rendered heading ids.
const CLOBBER_PREFIX = 'user-content-';

// Extracts H2/H3 headings from a post's raw markdown so the table of
// contents can link to them. Uses github-slugger (the same slugger
// rehype-slug uses under the hood) so generated hrefs match the actual
// heading ids MarkdownRenderer renders, without needing a second pass
// over the rendered HTML.
export function extractHeadings(markdown) {
  if (!markdown) return [];

  const slugger = new GithubSlugger();
  const headings = [];

  // Content is stored with \r\n line endings; split('\n') alone leaves a
  // trailing \r on each line, which silently breaks `(.+)$` since `.`
  // never matches a line-terminator character (including \r).
  const normalized = markdown.replace(/\r\n/g, '\n');

  for (const line of normalized.split('\n')) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;

    const level = match[1].length;
    const text = match[2].trim();
    headings.push({ level, text, slug: `${CLOBBER_PREFIX}${slugger.slug(text)}` });
  }

  return headings;
}

// FAQ questions live in blog.faqs, not the markdown content field, so
// they need their own slugs - generated the same way (github-slugger)
// so BlogFAQ.jsx can render matching ids for the TOC to link to.
export function slugifyFaqQuestions(faqs) {
  if (!Array.isArray(faqs)) return [];

  const slugger = new GithubSlugger();
  return faqs.map((faq) => `faq-${slugger.slug(faq.question)}`);
}
