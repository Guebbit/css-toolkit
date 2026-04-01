# String functions (JavaScript)

Utility string helpers exported from `src/functions/strings.js`.

## stringSplit(str, separator)

Splits a string by a separator.

```js
stringSplit('a-b-c', '-'); // ["a", "b", "c"]
```

## stringEndsWith(str, find)

Checks if `str` ends with `find`.

```js
stringEndsWith('primary-500', '500'); // true
```
