const BlogTOC = ({ headings }) => {
  if (!headings || headings.length === 0) return null;

  return (
    <section className="mb-12" aria-labelledby="blog-toc-heading">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h3
          id="blog-toc-heading"
          className="flex items-center gap-3 text-lg font-bold text-white mb-5"
        >
          <span className="w-1 h-5 bg-orange-500 rounded-full" aria-hidden="true" />
          Table of Contents
        </h3>
        <nav aria-label="Table of contents">
          <ul className="space-y-2.5">
            {headings.map((heading) => (
              <li
                key={heading.slug}
                className={heading.level === 3 ? 'ml-5' : ''}
              >
                <a
                  href={`#${heading.slug}`}
                  className="group flex items-center gap-2 text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <span className="text-slate-600 group-hover:text-orange-500 transition-colors">
                    &rsaquo;
                  </span>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BlogTOC;
