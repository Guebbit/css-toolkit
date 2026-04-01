# @mixin create-colors-vars-custom

Generates CSS variables for a single custom color collection.

## Usage

```css
:root {
  @mixin create-colors-vars-custom primary, ff00ff, g-theme-;
}
```

Arguments:

1. `colorName`
2. `hexColor`
3. `prefix` for custom properties
