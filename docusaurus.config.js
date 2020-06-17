module.exports = {
  title: 'Deskera',
  tagline: 'Run Your Business',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Deskera', // Usually your GitHub org/user name.
  projectName: 'Deskera', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Deskera Logo',
        src: 'img/deskera-red-logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Books Docs',
          position: 'left',
        },
        {
          to: 'docs-crm/',
          activeBasePath: 'docs-crm',
          label: 'CRM Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Setup Developer Account',
              to: 'docs/setup/',
            },
            {
              label: 'Authentication',
              to: 'docs/authenticate/',
            },
            {
              label: 'Resources',
              to: 'docs/accountapi/',
            },
            {
              label: 'SDK',
              to: 'docs/account/',
            }

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/deskera',
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
              href: 'https://betterbusiness.deskera.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/deskera',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deskera. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
