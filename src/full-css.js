/**
 * Generate a full toolkit source CSS file using built-in mixins/functions.
 * This can be compiled with PostCSS + postcss-mixins + @guebbit/css-toolkit.
 */
export function createFullCssSource() {
    return `@mixin create-colors;
@mixin create-colors-custom primary, ff00ff, true, , g-theme-;

:root {
  @mixin create-colors-vars;
  @mixin create-colors-vars-custom primary, ff00ff, g-theme-;

  --color-opaque-1: color-opaque(rgba(33, 33, 33, 0), rgba(33, 33, 33, .84));
  --color-opaque-2: #6f6f6f;
  --color-opaque-3: #ddd;
  --color-tint-1: color-tint(#000, 35%);
  --color-tint-2: color-tint(#000, 90%);
  --color-shade-1: color-shade(#fff, 90%);
  --color-shade-2: color-shade(#fff, 35%);
  --color-shift-1: color-shift(#fff, 90%);
  --color-shift-2: color-shift(#fff, 35%);
  --color-shift-3: color-shift(#000, -35%);
  --color-shift-4: color-shift(#000, -90%);
  --color-contrast-1: color-contrast(#000);
  --color-contrast-2: color-contrast(#fff);
}

@mixin create-class text-align, right:right, important;
@mixin create-helper-margin auto:auto, 48:48px;
@mixin create-class width, 100:100%, important;
@mixin create-class gap, 24:24px, important, prefix:flex-;

.aspect-ratio-1-1 {
  @mixin build-aspect-ratio 100%;
}

.aspect-ratio-16-9 {
  @mixin build-aspect-ratio 56%;
}

@mixin build-compatibility ie {
  .compatibility-ie {
    display: block;
  }
}

@mixin build-compatibility edge {
  .compatibility-edge {
    display: block;
  }
}

@mixin build-compatibility firefox {
  .compatibility-firefox {
    display: block;
  }
}
`;
}

export default createFullCssSource;
