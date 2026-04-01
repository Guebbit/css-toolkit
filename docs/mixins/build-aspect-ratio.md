# @mixin build-aspect-ratio

Shortcut mixin to create ratio boxes with a `::before` spacer and absolute child anchor.

## Usage

```css
.aspect-ratio-16-9 {
  @mixin build-aspect-ratio 56%;
}
```

## Result

- Adds `position: relative`
- Adds `&::before` with `padding-top: <ratio>`
- Anchors direct children to fill the container
