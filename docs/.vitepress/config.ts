import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: "en-US",
    title: "Guebbit SCSS Library",
    titleTemplate: ":title - base SCSS plus components",
    description: "Guebbit's personal SCSS Library (MIT license, free to use).",
    themeConfig: {
        logo: "/logotype.svg",
        siteTitle: "SCSS Library",
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/Guebbit/css-toolkit',
            },
        ],
        sidebar: [
            {
                text: 'Colors',
                collapsed: false,
                items: [
                    {
                        text: 'Bootstrap',
                        link: '/colors/bootstrap.md',
                    },
                    {
                        text: 'Brands',
                        link: '/colors/brands.md',
                    },
                    {
                        text: 'Gradients',
                        link: '/colors/customs.md',
                    }
                ]
            },
            {
                text: 'Functions',
                collapsed: false,
                items: [
                    {
                        text: 'Colors',
                        link: '/functions/colors.md',
                    },
                    {
                        text: 'Helpers',
                        link: '/functions/helpers.md',
                    }
                ]
            },
            {
                text: 'Mixins',
                collapsed: false,
                items: [
                    {
                        text: 'Build Aspect Ratio',
                        link: '/mixins/build-aspect-ratio.md',
                    },
                    {
                        text: 'Build Compatibility',
                        link: '/mixins/build-compatibility.md',
                    },
                    {
                        text: 'Build Scrollbar',
                        link: '/mixins/build-scrollbar.md',
                    },
                    {
                        text: 'Create Colors',
                        link: '/mixins/create-colors.md',
                    },
                    {
                        text: 'Create Size instruction',
                        link: '/mixins/create-instruction.md',
                    },
                    {
                        text: 'Create Margin helper',
                        link: '/mixins/create-helper-margin.md',
                    },
                    {
                        text: 'Create Padding helper',
                        link: '/mixins/create-helper-padding.md',
                    }
                ]
            },
        ]
    }
})