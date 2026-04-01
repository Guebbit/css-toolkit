/**
 * PostCSS configuration for @guebbit/css-toolkit
 *
 * This configuration wires together all PostCSS plugins needed to process
 * CSS files that use the toolkit's mixins and color functions.
 *
 * Include or extend this configuration in your own postcss.config.js:
 *
 *   import cssToolkitConfig from '@guebbit/css-toolkit/postcss.config.js';
 *   export default cssToolkitConfig;
 */
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import postcssMixins from 'postcss-mixins';
import { mixins } from './src/mixins/index.js';
import toolkitPlugin from './index.js';

export default {
    plugins: [
        postcssImport(),
        postcssMixins({ mixins }),
        toolkitPlugin,
        postcssNesting(),
        autoprefixer()
    ]
};
