import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import sanitize from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');

  if (!context.site) {
    throw new Error('The site URL must be configured in astro.config.mjs');
  }

  return rss({
    title: 'The sndwch blog',
    description: 'All sandwiches news. All the time.',
    site: context.site,
    items: blog.map((post) => ({
      link: `/blog/${post.data.slug}/`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      content: sanitize(parser.render(post.body ?? '')),
    })),
  });
}
