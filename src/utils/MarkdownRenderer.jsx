'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';

// rehype-slug adds an `id` to every heading; extend the default sanitize
// schema to allow it through (it isn't in the default GitHub schema),
// so the ids the table of contents links to actually survive sanitization.
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    h1: [...(defaultSchema.attributes?.h1 || []), 'id'],
    h2: [...(defaultSchema.attributes?.h2 || []), 'id'],
    h3: [...(defaultSchema.attributes?.h3 || []), 'id'],
    h4: [...(defaultSchema.attributes?.h4 || []), 'id'],
  },
};

// Internal links (/blogs/..., /services/...) navigate normally within the
// site; external citation links open in a new tab, matching the
// target="_blank" rel="noopener noreferrer" pattern used elsewhere on the
// site (e.g. the Calendly link).
function MarkdownLink({ href, children, node, ...props }) {
  const isExternal = /^https?:\/\//.test(href || '');

  if (!isExternal) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <div className="reset-tw prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeSanitize, sanitizeSchema]]}
        components={{ a: MarkdownLink }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
