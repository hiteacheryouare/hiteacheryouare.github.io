---
layout: "../../layouts/portfolio.astro"
name: "(de)Motivator"
description: "A long-running side project that does exactly one thing: lower your self-esteem on demand. Press the button, get insulted."
date: "Apr 16 2021"
freelance: false
url: "https://demotivator.web.app"
heroImage:
    src: "https://demotivator.web.app/assets/dmv-logo-CraZEmCY.png"
    alt: "large, red button"
tags:
    - svelte
    - vite
    - tailwind
    - bootstrap
    - capacitor
    - firebase
    - turborepo
---

# (de)Motivator

A long-running side project that does exactly one thing: lower your self-esteem on demand. Press the button, get insulted.

It started in 2021 as a single-page HTML site and has since grown into:

- A web app with a steadily expanding insult library
- **MEGAMODE**
- An account system (Firebase Auth) with a per-user counter — some users are well into the thousands
- A mobile build, via Capacitor, wrapping the same Svelte codebase into native iOS/Android shells
- So many other things

The whole thing lives in a Turborepo monorepo so the shared insult engine, the web app, and the mobile shell can all evolve together. Probably the dumbest thing I've ever shipped, but its my first baby and so I love it!
