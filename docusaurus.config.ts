import type { Config } from '@docusaurus/types';
import searchlocal from '@cmfcmf/docusaurus-search-local';

const config: Config = {
  scripts: [{
    src: 'https://www.googletagmanager.com/gtag/js?id=G-HJDLJ8DZT3', // 替换为你的跟踪 ID
    async: true,
  }, {
    src: '/easy-page-doc/analytics.js', // 或者直接插入下面的内联脚本
    async: true,
  },],
  title: 'Easy Page',
  tagline: 'Make Front-End Development Easier',
  url: 'https://easy-page-doc.github.io',
  baseUrl: '/easy-page-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'easy-page', // Usually your GitHub org/user name.
  projectName: 'easy-page-doc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  plugins: [
    [
      searchlocal,
      {
        indexDocs: true,
        indexBlog: true,
        language: ['en', 'zh'],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/easy-page/easy-page-doc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/easy-page/easy-page/blog/',
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
      navbar: {
        title: 'Easy Page',
        logo: {
          alt: 'Easy Page Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '指南',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'apis',
            label: 'API',
            to: 'docs/apis',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/easy-page/easy-page',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '指南',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [],
          // },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/easy-page/easy-page',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EasyPage`,
      },
    }),
};

export default config;
