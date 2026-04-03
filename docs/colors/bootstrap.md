# Bootstrap Colors

Predefined Bootstrap-inspired color palettes exported by the toolkit.

## Usage

```scss
@use "@guebbit/css-toolkit" as guebbit;

.button {
  color: guebbit.color-get(guebbit.$colors-collection, "blue", "500");
}
```

## Source

<!-- prettier-ignore -->
<<< ../../src/colors/_bootstrap.scss
