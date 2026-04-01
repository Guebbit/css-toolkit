# @mixin create-colors

Generates utility classes from the built-in `colorsCollection`.

## Usage

```css
@mixin create-colors;
```

## Output classes

For each color entry it generates variants like:

- `.blue-400-text`
- `.blue-400-bg`
- `.blue-400-border`
- `.blue-400-pseudo-bg`
- `.blue-400-hover-text`
- `.blue-400-hover-bg`
- `.blue-400-hover-border`
- `.blue-400-hover-pseudo-bg`

Gradients are used only for background-oriented classes.
