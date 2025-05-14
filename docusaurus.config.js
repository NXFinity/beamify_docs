// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beamify',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NXFinity', // Usually your GitHub org/user name.
  projectName: 'beamify_local', // Usually your repo name.

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
        title: 'Beamify',
        logo: {
          alt: 'Beamify Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Developer Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            docsPluginId: 'public-api',
            position: 'left',
            label: 'PUBLIC API Docs',
          },
          {
            href: 'https://github.com/NXFinity/home_local',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: 'Beamify © 2025 EN|IX Llc. All Rights Reserved.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Beamify brand color overrides for Infima
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      // Infima color variables
      customCssVariables: {
        '--ifm-color-primary': '#ff3c00',
        '--ifm-color-primary-dark': '#d93600',
        '--ifm-color-primary-darker': '#b32e00',
        '--ifm-color-primary-darkest': '#7a1e00',
        '--ifm-color-primary-light': '#ff6a33',
        '--ifm-color-primary-lighter': '#ffb199',
        '--ifm-color-primary-lightest': '#ffe5d6',
        '--ifm-background-color': '#fff',
        '--ifm-background-surface-color': '#fff',
        '--ifm-font-color-base': '#18181b',
      },
    }),
  customFields: {
    brandOrange: '#ff3c00',
    brandOrangeLight: '#ff6a33',
    brandOrangeLighter: '#ffb199',
    brandOrangeLightest: '#ffe5d6',
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'public-api',
        path: 'public_api',
        routeBasePath: 'public-api',
        sidebarPath: require.resolve('./public.js'),
      },
    ],
  ],
};

export default config;
