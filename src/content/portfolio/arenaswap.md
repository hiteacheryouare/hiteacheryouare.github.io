---
layout: "../../layouts/portfolio.astro"
name: "ArenaSwap"
description: "A browser extension that watches every live game in your tabs and swaps you to whichever one is most exciting in the moment, scored by a custom algorithm I built called PowerScore."
date: "Apr 1 2026"
freelance: false
url: "https://hiteacheryouare.github.io/arenaswap/"
heroImage:
    src: "/arenaswap-promo.png"
    alt: "ArenaSwap promotional tile showing the extension switching between live sports games"
tags:
    - react
    - typescript
    - wxt
    - tailwind
    - bootstrap
    - browser-extension
    - jest
    - turborepo
---

# ArenaSwap

ArenaSwap is a cross-browser extension that watches every live game you have open and automatically swaps your active tab to whichever one is most exciting at the moment.

## How it works

Every open game gets continuously evaluated by **PowerScore**, a scoring algorithm I built that takes in live game state such as score differential, time remaining, scoring runs, possession changes, and league-specific signals and then boils it down to a single number representing how exciting the game is *right now*. The extension watches the leaderboard across your tabs and swaps you to whoever's on top. When something more exciting happens elsewhere, you're already watching it.

## How it's built

It's a Turborepo monorepo. The extension lives in `apps/extension`, PowerScore is its own package in `packages/powerScore` so it can be tested and reused on its own, and the shared business logic sits in `packages/core`. Built on [WXT](https://wxt.dev/) so one codebase ships to Chrome, Edge, and Firefox. React + TypeScript on the UI, Tailwind for utilities, Bootstrap for structure, Jest for tests.
