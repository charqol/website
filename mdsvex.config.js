import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  remarkPlugins: [
    remarkGfm // GitHub-flavored markdown (tables, strikethrough, etc.)
  ],

  rehypePlugins: [
    rehypeSlug, // adds IDs to headings
    [rehypeAutolinkHeadings, {
      behavior: 'wrap'
    }] // makes headings clickable (for TOC)
  ]
});

export default config;
