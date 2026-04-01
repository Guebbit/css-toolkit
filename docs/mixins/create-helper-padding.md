# @mixin create-helper-padding

Generates padding helper classes from key/value pairs.

## Usage

```css
@mixin create-helper-padding 6:6px, 12:12px, 24:24px;
```

## Output per key

For key `24`, value `24px`:

- `.pt-24`, `.pb-24`, `.pl-24`, `.pr-24`
- `.px-24`, `.py-24`
- `.pa-24`
