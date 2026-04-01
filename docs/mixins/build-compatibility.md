# @mixin build-compatibility

Wraps nested CSS in browser-targeted `@media`/`@supports` blocks.

## Usage

```css
@mixin build-compatibility ie {
  .legacy-only {
    display: block;
  }
}
```

## Supported targets

- `ie`
- `edge`
- `firefox`
- `opera`
- `safari`
