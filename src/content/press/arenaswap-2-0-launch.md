---
title: "Ryan Mullin Ships ArenaSwap 2.0"
description: "The rebuilt browser extension now tracks 31 leagues instead of 12, checks each game on its own clock based on how close it is, and speaks 11 languages."
author: "Ryan Mullin"
voice: "third"
dateline: "Philadelphia, P.A."
pubDate: "August 16 2026"
heroImage:
    src: "/arenaswap-2-promo.png"
    alt: "the ArenaSwap 2.0 promotional tile"
---

Ryan Mullin has released ArenaSwap 2.0, a rebuild of the browser extension that scores the live games in a viewer's open tabs and switches to whichever is most exciting. Coverage grows from 12 leagues to 31, spanning basketball, football, hockey, baseball, softball and soccer.

The scoring algorithm, PowerScore, gets a new volatility signal that tracks how much a game's win probability swings, and now defines a "close" game differently by sport instead of using one threshold for all of them. Momentum fades faster in basketball than in soccer, blowouts stop counting as close once the final minutes arrive, and the postseason scoring boost now correctly applies to tournaments like the World Cup and the Olympics, which it had missed before. M

The extension no longer checks every game on the same clock. A tight game gets rescored every six seconds; a quiet one drops to 25, and a league with nothing live sleeps for two to three minutes, with the timers staggered so all 31 leagues don't hit ESPN's servers at once.

A new Standby Stream feature gives viewers a fallback tab to watch when every game they're tracking falls below their interest threshold, then switches them back once one picks back up. The game detail screen gained charts tracking PowerScore, score and win probability over the course of a game, along with sport-specific displays: a base diamond for baseball, down markers for football, and continuous clock notation past the 90th minute for soccer.

ArenaSwap now speaks 11 languages, up from English only, with all 546 strings in its interface translated. Onboarding was rebuilt into a three-step setup for new installs and an eight-step guided tour that ends in confetti.

Full release notes are at [hiteacheryouare.github.io/arenaswap/releases/2.0.0](https://hiteacheryouare.github.io/arenaswap/releases/2.0.0/).
