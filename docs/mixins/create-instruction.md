# Create Instruction

Create instructions. Given name and size.
Example: width and min-width

## Example

```scss
@include create-class("width", (
    (25, 25%),
    (50, 50%),
    (75, 75%),
    (100, 100%),
    (p25, 25px),
    (p50, 50px),
    (p75, 75px),
    (p100, 100px)
), true);
```

## Code

<<< ../../src/mixins/_create-class.scss

## SCSS variables

| Variable          | Description                                              | Accepted Values       | Default |
|:------------------|:---------------------------------------------------------|:----------------------|:--------|
| `$instruction`    | CSS instruction to insert                                | `string`              | `none`  |
| `$measure-list`   | List of pairs <name, value>                              | `Array<name,value>[]` | `[]`    |
| `$important`      | Flag: if instruction is !important                       | `boolean`             | `false` |
| `$prefix`         | Eventual prefix (like `guebbit-`), to prevent collisions | `string`              | ``      |
| `$delimiter`      | Custom delimeter of the final classnames                 | `string`              | `-`     |