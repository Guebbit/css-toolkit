# @mixin create-helper-margin

Generates margin helper classes from key/value pairs.

## Usage

```css
@mixin create-helper-margin auto:auto, 6:6px, 12:12px, 24:24px;
```

## Output per key

For key `24`, value `24px`:

- `.mt-24`, `.mb-24`, `.ml-24`, `.mr-24`
- `.mx-24`, `.my-24`
- `.ma-24`
