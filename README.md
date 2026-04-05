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

## Quick Start

```scss
@use "@guebbit/css-toolkit" as guebbit;

.card {
  color: guebbit.color-get(guebbit.$colors-collection, "neutral", "100");
  background: guebbit.color-get(guebbit.$colors-collection, "grey", "900");
}

.card-title {
  color: guebbit.color-get(guebbit.$colors-collection, "core", "grey");
}
```

## Scripts

- `npm run complete`: full local checks with auto-fixes
- `npm run complete:check`: full non-mutating checks

## New highlights

- Dynamic breakpoint functions and mixins (`breakpoint-get`, `build-breakpoint-*`)
- Expanded browser compatibility targets (`chrome`, `webkit`, `modern`, `legacy`) with aliases
