// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TCET Open Source',
  tagline: 'Official Website of TCET Open Source',
  favicon: 'img/favicon.ico?v=3',

  // Set the production url of your site here
  url: 'https://opensource.tcetmumbai.in/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tcet-opensource', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/tcet-opensource/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Blogs",
          blogDescription: "TCET Open Source Blogging Page",
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      metadata: [{name: 'TCET Open Source', content: 'opensource, software'}],
      navbar: {
        hideOnScroll: true,
        title: 'TCET Open Source',
        logo: {
          alt: 'TCET Open Source Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about-tcetopensource',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tcet-opensource/documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About TCET Open Source',
                to: '/docs/about-tcetopensource',
              },
              {
                label: 'Documentation Website',
                to: '/docs/projects/docs-site/about-docs',
              },
              {
                label: 'TCET Linux',
                to: '/docs/projects/tcet-linux/about-tcet-linux',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                to: 'https://github.com/tcet-opensource/documentation',
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/tcet-opensource/mycompany/',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/r7ZhAREg2M',
              },
            ],
          },
          {
            title: 'Connect with us',
            items: [
              {
                label: 'Instagram',
                to: "https://www.instagram.com/tcetopensource/  ",
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/tcetopensource',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TCET Open Source.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
