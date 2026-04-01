# Helper functions (JavaScript)

Utility helpers exported from `src/functions/helpers.js`.

## noNullVar(list)

Returns the first value that is not `null`, `undefined`, `"null"` or `"undefined"`.

```js
noNullVar([null, undefined, 'fallback']); // "fallback"
```

## noTargetVar(check, color)

Returns `"inherit"` when `color === check`, otherwise returns `color`.

```js
noTargetVar('transparent', 'transparent'); // "inherit"
```

## mapDeepGet(map, ...keys)

Gets a nested value safely.

```js
mapDeepGet({ a: { b: 10 } }, 'a', 'b'); // 10
```
