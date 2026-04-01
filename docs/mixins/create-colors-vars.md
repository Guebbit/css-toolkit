# @mixin create-colors-vars

Generates CSS variables from the built-in `colorsCollection`.

## Usage

Use inside `:root` (or another selector where custom properties should live):

```css
:root {
  @mixin create-colors-vars g-theme-;
}
```

## Output

For each color it generates:

- `--{prefix}{branch}-{name}: r g b`
- `--{prefix}on-{branch}-{name}: r g b` (best contrast foreground)
