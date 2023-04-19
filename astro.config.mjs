import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://crablang.org',
	integrations: [mdx(), sitemap()],
	adapter: vercel({
		analytics: true,
	}),
});
