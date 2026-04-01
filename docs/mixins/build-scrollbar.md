# @mixin build-scrollbar

Generates WebKit scrollbar styles inside the current selector.

## Usage

```css
.panel {
  overflow: auto;
  @mixin build-scrollbar 8px, #888, #111, 12px;
}
```

## Arguments

1. `size` (default `4px`)
2. `color` thumb color (default `#fff`)
3. `bg` track color (default `auto`, mapped to `transparent`)
4. `radius` thumb border radius (default `10px`)
