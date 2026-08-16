---
layout: "../../layouts/pressRelease.astro"
title: "Ryan Mullin Ships ArenaSwap 1.0"
description: "ArenaSwap scores every live game in a viewer's open tabs and switches the browser to whichever one is most exciting at that moment."
author: "Ryan Mullin"
voice: "third"
dateline: "Boston, Mass."
pubDate: "April 29 2026"
heroImage:
    src: "/arenaswap-promo.png"
    alt: "the ArenaSwap promotional tile"
---

Ryan Mullin has released version 1.0 of ArenaSwap, a browser extension that scores the live games a viewer has open across 12 sports leagues and switches the browser to whichever one is most exciting at that moment. It is his first published browser extension. He built it over March Madness, running it on his own tabs as he went.

ArenaSwap runs on tabs the viewer already has open. Each tab is assigned to a game from a dropdown and can be unassigned at any time. From there the extension polls live game data every 15 seconds, rescores every game, unmutes the tab holding the best one and mutes the rest. The 12 leagues are the NFL, NBA, WNBA, NHL, MLB, MLS, the Premier League and the FIFA World Cup, plus college football, men's and women's basketball, and men's hockey.

The ranking comes from PowerScore, an algorithm Mullin wrote for the project. It reads live game state from ESPN's API and rates each game on a 100-point scale: 30 points for how close the score is, 30 for late-game pressure, 20 for momentum, 12 for lead changes and eight for how plausible a comeback looks.

The extension is built on WXT in a Turborepo monorepo, so one codebase targets both Chromium and Firefox. PowerScore sits in its own package, apart from the extension around it, so it can be tested on its own.

ArenaSwap is in the Chrome Web Store, Microsoft Edge Add-ons and Firefox Add-ons. Documentation and install links are at [hiteacheryouare.github.io/arenaswap](https://hiteacheryouare.github.io/arenaswap/).

Mullin plans to add more data signals to PowerScore.
