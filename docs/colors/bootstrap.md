# Bootstrap Colors

Predefined Bootstrap-inspired color palettes exported by the toolkit.

## Usage

```scss
@use "@guebbit/css-toolkit" as guebbit;

.button {
  color: map.get(map.get(guebbit.$colors-collection, "blue"), "500");
}
```

## Source

<<< ../../src/colors/\_bootstrap.scss
