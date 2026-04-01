# Color functions

These functions are processed by the toolkit plugin inside declaration values.

## color-opaque(background, foreground)

Returns the visible opaque color when `foreground` is rendered over `background`.

```css
.demo {
  color: color-opaque(#ddd, rgba(33, 33, 33, 0.84));
}
```

## color-tint(color, weight)

Mixes a color with white.

```css
.demo {
  background: color-tint(#333, 25%);
}
```

## color-shade(color, weight)

Mixes a color with black.

```css
.demo {
  background: color-shade(#ddd, 25%);
}
```

## color-shift(color, weight)

If weight is positive it shades, if negative it tints.

```css
.darken { color: color-shift(#333, 25%); }
.lighten { color: color-shift(#333, -25%); }
```

## color-luminance(color)

Returns relative luminance as a percentage.

```css
.demo {
  --lum: color-luminance(#333);
}
```

## color-contrast(color, dark, light)

Returns the most contrasting between `dark` and `light`.

```css
.demo {
  background: #222;
  color: color-contrast(#222, #000, #fff);
}
```

## extract-colors(color, mode, classic)

Extracts color channels:

- `mode=1`: always `r g b`
- `mode=2` (default): `r g b` for opaque, `r g b / a` when alpha exists
- `classic=true`: comma syntax (`r, g, b`)

```css
:root {
  --brand-rgb: extract-colors(#3d8bfd, 1);
}
```

## create-collection(color)

JavaScript utility that returns shades `100..900` from a base color.  
Used internally by custom color mixins.
