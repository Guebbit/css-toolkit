# Breakpoints

Dynamic breakpoint helpers for maps and responsive ranges.

## Example

```scss
@use "@guebbit/css-toolkit" as guebbit;

$my-breakpoints: (
  "mobile": 0,
  "tablet": 768px,
  "desktop": 1200px,
);

.test {
  --tablet-min: #{guebbit.breakpoint-min("tablet", $my-breakpoints)};
  --tablet-max: #{guebbit.breakpoint-max("tablet", $my-breakpoints)};
}
```

## Code

<!-- prettier-ignore -->
<<< ../../src/functions/_breakpoints.scss
