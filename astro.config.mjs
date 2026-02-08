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
          ],
        },
        {
          label: 'Mathematics',
          items: [
            {
              label: 'Overview',
              slug: 'math',
            },
            {
              label: 'Differential Equations',
              items: [
                {
                  label: 'Introduction',
                  slug: 'math/differential-equations',
                },
                {
                  label: 'Theory',
                  items: [
                    {
                      label: 'Intro',
                      slug: 'math/differential-equations/theory',
                    }
                  ]
                },
                {
                  label: 'Practice',
                  items: [
                    {
                      label: 'Intro',
                      slug: 'math/differential-equations/practice',
                    },
                    {
                      label: 'Lipshitz functions',
                      slug: 'math/differential-equations/practice/lipshitz-functions',
                    },
                    {
                      label: 'Picard iterations',
                      slug: 'math/differential-equations/practice/picard-iterations'
                    },
                    {
                      label: 'Separable variables',
                      slug: 'math/differential-equations/practice/separate-variables'
                    },
                    {
                      label: 'Equations with linear functions',
                      slug: 'math/differential-equations/practice/linear-function'
                    },
                    {
                      label: 'First-order homogeneous',
                      slug: 'math/differential-equations/practice/first-order-homogeneous'
                    },
                    {
                      label: 'Equations with Linear-Fractional argument',
                      slug: 'math/differential-equations/practice/linear-fractional-argument'
                    },
                    {
                      label: 'Linear ODE',
                      slug: 'math/differential-equations/practice/linear-ode'
                    },
                    {
                      label: 'Bernoully ODE',
                      slug: 'math/differential-equations/practice/bernoully'
                    },
                    {
                      label: 'Exact ODE',
                      slug: 'math/differential-equations/practice/exact-ode'
                    }
                  ]
                },
              ],
            },
          ],
        },
      ]
    }),
  ],
});
