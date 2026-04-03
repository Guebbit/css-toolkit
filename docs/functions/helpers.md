# Helper Functions

General helper functions used across the toolkit.

## Available helpers

- `no-null-var($list)` returns the first non-null value in a list.
- `no-target-var($check, $color)` returns `inherit` when `$color` matches `$check`.
- `map-deep-get($map, $keys...)` reads nested map values.
- `color-get($collection, $group, $shade)` returns one color from a 2-level collection.

## Source

<!-- prettier-ignore -->
<<< ../../src/functions/_helpers.scss
