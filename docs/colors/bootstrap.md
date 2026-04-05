# Bootstrap Colors

Predefined Bootstrap-inspired color palettes exported by the toolkit.

## Notes on neutral and grey scales

- `neutral` is the base black-to-white ramp (`0` through `900`).
- `core.black` and `core.white` are backward-compatible aliases of the neutral endpoints.
- `grey` is the canonical Bootstrap grey ramp.
- `gray` is kept as a backward-compatible alias of `grey`.

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
