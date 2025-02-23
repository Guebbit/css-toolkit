# Build Compatibility

## Example

Compatibility mode for browsers
Firefox, Internet Explorer, Microsoft Edge, Opera, Safari

```scss
@include guebbit-compatibility("ie") {
    ...
}
```

# Code

<<< ../../src/mixins/_build-compatibility.scss 

## SCSS variables

| Variable     | Description        | Accepted Values | Default |
|:-------------|:-------------------|:----------------|:--------|
| `@content`   | CSS Style to apply | `content`       | ``      |
| `$browser`   | browser name       | `string`        | `none`  |