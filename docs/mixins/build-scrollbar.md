# Scrollbar

## Example
Scrollbars of element

```scss
    @include build-scrollbar(4px, #fff, #000, 10px);
```

## Code

<<< ../../src/mixins/_build-scrollbar.scss

| Variable  | Description             | Accepted Values | Default |
|:----------|:------------------------|:----------------|:--------|
| `$size`   | Size of scrollbar       | `size`          | `4px`   |
| `$color`  | Color of scrollbar      | `color`         | `#fff`  |
| `$bg`     | Color in the background | `color`         | `auto`  |
| `$radius` | Radius of scrollbar     | `size`          | `10px`  |