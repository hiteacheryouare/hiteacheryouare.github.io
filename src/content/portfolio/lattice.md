---
layout: "../../layouts/portfolio.astro"
name: "Lattice"
description: "A task runner and toolchain manager for monorepos in any language. It figures out what each workspace already uses, runs everything in dependency order, and caches the results so you only build what changed."
date: "Jul 17 2026"
freelance: false
url: "https://latticeandcompany.github.io/lattice"
heroImage:
    src: "/lattice-promo.svg"
    alt: "The Lattice wordmark and rosette mark"
tags:
    - rust
    - typescript
    - react
    - tauri
    - astro
    - bootstrap
    - tailwind
    - sass
    - cli
    - monorepo
---

# Lattice

Most monorepo tooling assumes your repo is JavaScript. Lattice doesn't. It runs tasks the same way whether a workspace is Go, Rust, Python, Java, Ruby, .NET, or Node. It also pins the compilers, linters, and package managers each workspace needs, so a fresh clone builds the same on a laptop and in CI. The two halves are independent. Plenty of people want one and not the other.

## What it does

You list your workspaces once. Lattice then reads whatever manifest or lockfile is already sitting in each directory to work out what a task actually runs, so there are no build scripts to write and nothing to keep in sync. It builds a dependency graph across the repo, starts the independent work in parallel, and restores anything it has already built from a content-addressed cache. Change one workspace and only that workspace and its dependents re-run.

`lattice init` on an existing repo reads the pipeline the repo already declares, from `turbo.json`, `nx.json`, `package.json` scripts, a `justfile`, a `Taskfile.yml`, or `pyproject.toml`, and writes out every task it finds instead of leaving you to redeclare them by hand. Anything it has no honest equivalent for gets left out rather than guessed at, so the config it writes always loads.

## How it's built

The core is Rust. Separate crates handle the graph scheduler, the cache, config loading, the runner, and the event stream, all sitting under one CLI. A Tauri and React desktop app sits on top, which is where the run visualizations and the cache inspector live. The marketing and docs site is Astro. An agent skill ships with the project too, so someone else's coding agent can learn to drive Lattice instead of hallucinating flags.
