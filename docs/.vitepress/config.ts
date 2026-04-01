import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    title: '@guebbit/css-toolkit',
    titleTemplate: ':title · @guebbit/css-toolkit',
    description: 'PostCSS toolkit with CSS functions, mixins, and color collections.',
    themeConfig: {
        logo: '/logotype.svg',
        siteTitle: 'css-toolkit',
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/Guebbit/css-toolkit'
            }
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
                        link: '/colors/customs.md'
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
                        link: '/functions/helpers.md'
                    },
                    {
                        text: 'Strings',
                        link: '/functions/strings.md'
                    }
                ]
            },
            {
                text: 'Mixins',
                collapsed: false,
                items: [
                    {
                        text: 'Build Aspect Ratio',
                        link: '/mixins/build-aspect-ratio.md'
                    },
                    {
                        text: 'Build Aspect Ratio Container',
                        link: '/mixins/build-aspect-ratio-container.md'
                    },
                    {
                        text: 'Build Aspect Ratio Anchor',
                        link: '/mixins/build-aspect-ratio-anchor.md'
                    },
                    {
                        text: 'Build Compatibility',
                        link: '/mixins/build-compatibility.md'
                    },
                    {
                        text: 'Build Scrollbar',
                        link: '/mixins/build-scrollbar.md'
                    },
                    {
                        text: 'Create Colors',
                        link: '/mixins/create-colors.md'
                    },
                    {
                        text: 'Create Colors Vars',
                        link: '/mixins/create-colors-vars.md'
                    },
                    {
                        text: 'Create Colors Custom',
                        link: '/mixins/create-colors-custom.md'
                    },
                    {
                        text: 'Create Colors Vars Custom',
                        link: '/mixins/create-colors-vars-custom.md'
                    },
                    {
                        text: 'Create Class',
                        link: '/mixins/create-class.md'
                    },
                    {
                        text: 'Create Margin helper',
                        link: '/mixins/create-helper-margin.md'
                    },
                    {
                        text: 'Create Padding helper',
                        link: '/mixins/create-helper-padding.md'
                    }
                ]
            }
        ]
    }
});
