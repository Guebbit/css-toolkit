# @mixin create-class

Generates classes for a CSS property from provided key/value pairs.

## Usage

```css
@mixin create-class width, 25:25%, 50:50%, 100:100%, important;
@mixin create-class gap, 24:24px, prefix:flex-;
```

## Arguments

1. `instruction` (CSS property, for example `width` or `gap`)
2. one or more value definitions (`name:value`)
3. optional `important` (or `true`) to append `!important`
4. optional `prefix:...` to prefix generated class names

## Output

Produces classes like:

- `.width-100 { width: 100% !important; }`
- `.flex-gap-24 { gap: 24px; }`
