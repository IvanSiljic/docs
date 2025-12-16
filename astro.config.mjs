// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Sunny Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/IvanSiljic/docs',
        },
      ],
      sidebar: [
        {
          label: 'Cellular Networks',
          items: [
            { label: 'Overview', slug: 'networks/cellular' },
            { 
              label: '1G',
              items: [
                { label: 'Overview', slug: 'networks/cellular/1g/overview' },
                { label: 'History', slug: 'networks/cellular/1g/history'}
              ]
            },
            // { label: '2G', slug: 'networks/cellular/2g' },
            // { label: '3G', slug: 'networks/cellular/3g' },
            // { label: '4G', slug: 'networks/cellular/4g' },
            // { label: '5G', slug: 'networks/cellular/5g' },
          ],
        },
      ]
    }),
  ],
});
