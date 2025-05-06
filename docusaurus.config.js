import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ChipChip\'s Heroes Docs',
    tagline: 'The place to find info about ChipChip\'s things',
    favicon: 'img/favicon.png',
    url: 'https://ChipChipsHeroes.github.io',
    baseUrl: '/Docs/',
    organizationName: 'ChipChipsHeroes',
    projectName: 'Docs',
    deploymentBranch: 'docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    lastVersion: "current",
                    includeCurrentVersion: true,
                    versions: {
                        current: {
                            label: "1.20.1",
                        },
                    },
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        ({
            image: 'img/social-card.jpg',
            navbar: {
                title: 'ChipChip\'s Heroes Docs',
                logo: {
                    alt: 'Logo',
                    src: 'img/favicon.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'sidebar',
                        position: 'left',
                        label: 'Heroes Documentation',
                    },
                    {
                        type: "docsVersionDropdown",
                        position: "right",
                    },
                    {
                        href: 'https://github.com/ChipChipsHeroes/Docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Links',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/qys44Cp5B2',
                            },
                            {
                                label: 'CurseForge',
                                href: 'https://www.curseforge.com/members/chipchipse/projects',
                            },
                            {
                                label: 'Modrinth',
                                href: 'https://modrinth.com/organization/chipchips',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/ChipChipsHeroes',
                            },
                        ],
                    },
                ],
                copyright: `Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
