# @mixin create-colors-custom

Creates utility classes for a single custom color collection generated at runtime.

## Usage

```css
@mixin create-colors-custom primary, ff00ff, true, , g-theme-;
```

Arguments:

1. `colorName` (example: `primary`)
2. `hexColor` (without `#` preferred, example: `ff00ff`)
3. `vars` (`true` to use CSS variables in generated classes)
4. `prefix` (class prefix)
5. `prefixV` (CSS variable prefix when `vars=true`)
