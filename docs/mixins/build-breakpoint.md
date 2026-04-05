# Build Breakpoint

Dynamic media query helpers for up/down/between responsive ranges.

## Example

```scss
@use "@guebbit/css-toolkit" as guebbit;

.component {
  @include guebbit.build-breakpoint-up("md") {
    display: grid;
  }

  @include guebbit.build-breakpoint("between", "sm", "lg") {
    gap: 24px;
  }
}
```

## Code

<!-- prettier-ignore -->
<<< ../../src/mixins/_build-breakpoint.scss
