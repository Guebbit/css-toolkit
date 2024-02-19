# Create Margin

## Example

```scss
@include create-helper-margin((
    (auto, auto),
    (6, 6px),
    (12, 12px),
    (24, 24px),
    (36, 36px),
    (48, 48px),
), true);
```

## Code

<<< ../../src/mixins/_create-helper-margin.scss


| Variable          | Description                                              | Accepted Values       | Default |
|:------------------|:---------------------------------------------------------|:----------------------|:--------|
| `$measure-list`   | List of pairs <name, value>                              | `Array<name,value>[]` | `[]`    |
| `$important`      | If instruction is !important                             | `boolean`             | `false` |
| `$prefix`         | Eventual prefix (like `guebbit-`), to prevent collisions | `string`              | ``      |
