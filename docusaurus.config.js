// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Privacy at 99x',
  tagline: 'Creating impactful digital products',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served`
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'privacy.99x.io',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '99x', // Usually your GitHub org/user name.
  projectName: 'privacy.99x.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/99x/privacy.99x.io/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/99x/privacy.99x.io/edit/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Privacy at',
        logo: {
          alt: '99x',
          src: 'img/99x-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/99x/privacy.99x.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Privacy at 99x',
                to: '/docs/intro',
              },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/99xio'
              },
              {
                label: 'Discord',
                href: 'https://www.facebook.com/99xio'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/99x_io'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://engineering.99x.io'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/99x'
              },
              {
                label: 'Contribute',
                href: 'https://github.com/99x/privacy.99x.io',
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 99x All Rights Reserved`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
