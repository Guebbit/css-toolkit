# @mixin build-aspect-ratio-anchor

Generates only the anchor rule for content inside an aspect-ratio container.

## Usage

```css
.ratio-box > .content {
  @mixin build-aspect-ratio-anchor;
}
```

This positions the element absolutely and stretches it to fill the parent.
