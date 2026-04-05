# Build Compatibility

## Example

Compatibility mode for browsers
Firefox, Internet Explorer, Microsoft Edge, Opera, Safari, Chrome, grouped targets (`modern`, `webkit`, `legacy`) and aliases (`msie`, `internet-explorer`, `ms-edge`, `ff`)

```scss
@include guebbit-compatibility("ie") {
    ...
}
```

# Code

<!-- prettier-ignore -->
<<< ../../src/mixins/_build-compatibility.scss

## SCSS variables

| Variable   | Description        | Accepted Values | Default |
| :--------- | :----------------- | :-------------- | :------ |
| `@content` | CSS Style to apply | `content`       | ``      |
| `$browser` | browser name       | `string`        | `none`  |
