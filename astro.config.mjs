// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';


export default defineConfig({
  // Configure `remark-math` and `rehype-mathjax` plugins:
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax],
  },

  integrations: [
    starlight({
      title: 'Sunny Docs',
      // Custom CSS to style MathJax equations
      customCss: ['./src/mathjax.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/IvanSiljic/docs',
        },
      ],
      sidebar: [
        { label: 'Overview', slug: ''},
        {
          label: 'Networks',
          items: [
            { 
              label: 'Cellular Networks', 
              items: [
                { label: 'Overview', slug: 'networks/cellular' },
                { 
                  label: '1G',
                  items: [
                    { label: 'Overview', slug: 'networks/cellular/1g/overview' },
                    { label: 'From Mouth to Radio Signal', slug: 'networks/cellular/1g/from-mouth-to-radio-signal' },
                  ]
                },
              ]
            },
            // {  
            //   label: 'Hardware',
            //   items: [
            //     { label: 'Antennas and stuff', slug: 'networks/hardware/antennas-and-stuff'}
            //   ]
            // },
          ],
        },
      ]
    }),
  ],
});
