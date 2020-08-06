module.exports = {
  title: 'Deskera',
  tagline: 'All in one business platform suite for small and medium businesses.',
  url: 'https://deskera.github.io',
  baseUrl: '/Developer-Documentation/',
  favicon: 'img/favicon.png',
  organizationName: 'Deskera', // Usually your GitHub org/user name.
  projectName: 'Developer-Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Deskera Logo',
        src: 'img/deskera-black-logo.png',
        srcDark: "img/deskera-white-logo.png"
      },
      links: [
        {
          to: 'docs/books/started',
          activeBasePath: 'docs/books/',
          label: 'Books Docs',
          position: 'left',
        },
        {
          to: 'docs/sales/started',
          label: 'Sales Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/books/started/',
            },
            {
              label: 'Setup Developer Account',
              to: 'docs/books/setup/',
            },
            {
              label: 'Authentication',
              to: 'docs/books/authenticate/',
            },
            {
              label: 'Resources',
              to: 'docs/books/accountapi/',
            },
            {
              label: 'SDK',
              to: 'docs/books/account/',
            }

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/Deskera/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/deskera/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/deskera',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://deskera.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/deskera',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.deskera.com">Deskera</a>. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'books/started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
