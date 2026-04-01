# @guebbit/css-toolkit

PostCSS toolkit with:

- color collections ready to use
- CSS value functions (`color-*`, `extract-colors`)
- mixins for utility class generation and compatibility helpers

## Installation

```bash
npm install @guebbit/css-toolkit
```

## PostCSS setup

Use the bundled PostCSS config:

```js
import cssToolkitConfig from '@guebbit/css-toolkit/postcss.config.js';
export default cssToolkitConfig;
```

Or wire plugins manually:

```js
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';
import { mixins } from '@guebbit/css-toolkit/src/mixins/index.js';
import toolkitPlugin from '@guebbit/css-toolkit';

export default {
  plugins: [
    postcssImport(),
    postcssMixins({ mixins }),
    toolkitPlugin(),
    postcssNesting(),
    autoprefixer()
  ]
};
```

## How to use

- Use **functions** inside declaration values.
- Use **mixins** with `@mixin ...` (via `postcss-mixins`).
- Use **colors** from the provided collections when generating utilities.

See sidebar pages for every function/mixin and copy-paste examples.
