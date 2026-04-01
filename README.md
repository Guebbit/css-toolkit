# css-toolkit

A repository containing helpful SCSS functions, mixins, and utilities for streamlining and standardizing CSS development

# Architecture & Development Notes

## Why is `src/mixins/index.js` written as a single file?

`postcss-mixins` expects one registry object (`{ 'mixin-name': fn }`) to resolve mixin calls.  
`src/mixins/index.js` is that registry/adapter layer:

- each real mixin implementation is already split into dedicated files under `src/mixins/*.js`
- `index.js` only wires names, normalizes arguments, and replaces nodes in the PostCSS AST
- keeping this mapping in one place makes plugin setup and mixin discovery easier

If the adapter grows too much, wrappers can also be split and re-exported, but the current shape is intentional for PostCSS integration.

## Why is `src/index.css` almost empty?

It is a package CSS entry placeholder.  
The root `index.css` imports it so consumers have a stable CSS entrypoint, even though most toolkit logic is generated via PostCSS mixins/functions instead of shipping large static CSS by default.

## How do I build `test/compiled.css`?

`test/compiled.css` is currently used as the **test input fixture** (not generated output).  
Typical workflow:

1. edit/create `test/compiled.css` with mixin/function usage
2. run `npm test`

The compile test processes that file in-memory with PostCSS and asserts the resulting CSS.

# TODO

- create an automatic functions for gradients
- More tests. For every function or mixin.
