# css-toolkit

A repository containing helpful SCSS functions, mixins, and utilities for streamlining and standardizing CSS development

## Install

```bash
npm i @guebbit/css-toolkit
```

## Usage

```scss
@use "@guebbit/css-toolkit" as guebbit;
```

## Scripts

- `npm run complete`: full local checks with auto-fixes
- `npm run complete:check`: full non-mutating checks

## New highlights

- Dynamic breakpoint functions and mixins (`breakpoint-get`, `build-breakpoint-*`)
- Expanded browser compatibility targets (`chrome`, `webkit`, `modern`, `legacy`) with aliases
