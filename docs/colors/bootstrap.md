# Bootstrap Colors

Predefined Bootstrap-inspired color palettes exported by the toolkit.

## Notes on neutral and gray scales

- `neutral` is the base black-to-white ramp (`0` through `900`).
- `core.black` and `core.white` are backward-compatible aliases of the neutral endpoints.
- `gray` is the canonical Bootstrap gray ramp.
- `grey` is kept as a backward-compatible alias of `gray`.

## Usage

```scss
@use "@guebbit/css-toolkit" as guebbit;

.button {
  color: guebbit.color-get(guebbit.$colors-collection, "blue", "500");
}

.surface {
  color: guebbit.color-get(guebbit.$colors-collection, "neutral", "100");
  background: guebbit.color-get(guebbit.$colors-collection, "neutral", "900");
}
```

## Source

<!-- prettier-ignore -->
<<< ../../src/colors/_bootstrap.scss
