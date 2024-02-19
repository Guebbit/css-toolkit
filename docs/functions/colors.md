# Colors

https://blog.logrocket.com/using-hsl-colors-css/#what-hsl
https://blog.logrocket.com/building-color-palette-css/#60-30-10-design-rule

## color-brightness

Gives %, less than 50 darker is better, less than 50, lighter.

```scss
@if(color-brightness($color) > 50)
```

```scss
@function color-brightness($color) {
  @return math.div(((red($color) * .299) + (green($color) * .587) + (blue($color) * .114)), 255 * 100%);
}
```

| Variable  | Description    | Accepted Values | Default |
|:----------|:---------------|:----------------|:--------|
| `$color`  | Color to check | `color`         | `none`  |



## color-contrast

Compares contrast of a given color to the light/dark arguments and returns whichever is most "contrasty"

```scss
background-color: $background;
color: color-contrast($background);
```

```scss
@function color-contrast($color: #fff, $dark: #000, $light: #fff) {
  $color-brightness: color-brightness($color);
  $light-text-brightness: color-brightness($light);
  $dark-text-brightness: color-brightness($dark);

  @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);
}
```

## color-hex2rgba

Convert HEX color to RGBA color

```scss
color: color-hex2rgba(#00ff00, 0.5);
```

## color-hex2rgbcore

Compares contrast of a given color to the light/dark arguments and returns whichever is most "contrasty"

```scss
--custom-var: color-hex2rgbcore(#00ff00);
```


| Variable | Description          | Accepted Values | Default |
|:---------|:---------------------|:----------------|:--------|
| `$color` | Color to check       | `color`         | `4px`   |
| `$dark`  | Dark color to apply  | `color`         | `#000`  |
| `$light` | White color to apply | `color`         | `#fff`  |