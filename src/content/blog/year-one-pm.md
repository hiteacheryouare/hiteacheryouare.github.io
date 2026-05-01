---
layout: "../../layouts/blogPost.astro"
title: "Year One: A Postmortem, a Week of Ship, and What's Next"
description: "A look back at my first year at Northeastern — what it cost, what it gave me, how development came alive again, and where I'm headed next."
author: "Ryan Mullin"
pubDate: "May 1 2026"
heroImage:
    src: "/nu.jpg"
    alt: "Centennial Common at Northeastern Univeristy"
---

This post is a postmortem of that year, and organized around three things: the year itself, the week I just wrapped up shipping, and what comes next. I also threw in some of my favorite Boston pictures I took while there for your enjoyment.

## The Year

![boston harbor at night](/IMG_1577.png)

### It Was Harder Than I Expected

I knew college was going to be hard. I didn't know it was going to be _that_ hard. In high school, I could work hard and still find breathing room. Freshman year was nonstop, the worst kind of busy where your weekends are a few days to recover before it starts again. 

Discrete Structures and Financial Accounting specifically brought me to my knees. 😠.

The good news is that I survived. Two semesters, 4.0 GPA, Dean's List both times. Porbably my crown jewel achievement of the school year

### The Social Equation

Maintaining a solid social life in the middle of that workload was its own seperate challenge. Anyone who tells you GPA and social life are mutually exclusive hasn't figured out time management yet. You have to be intentional about both.

### Beyond the Classroom

Two things from outside the classroom defined this year for me in ways I didn't fully anticipate.

The first is **Husky Ambassadors**. Most people at Northeastern get this later in their time at NU, so getting it as a first-year was genuinely a flex. But more than the status, I actually love the work. I get to share stories and help families make one of the biggest decisions of their lives. I'd do it as a volunteer if I had to. The fact that I get paid is just the cherry on top.

The second is that I'm heading into this summer as a **head lifeguard and college swim coach**. Same philosophy applies there as well. I would coach for free if it came to that.

---

## Development: How It Changed

![boston public library courtyard](/IMG_1657.png)

### Where I Started

Let me be honest about where I was as a developer before Northeastern: stalled. Junior and senior year of high school, I ran out of ideas I could simply implement — and the big ideas I did have were too big to tackle alone. Development slowly took a back seat. 

Other (porbably more important) things took priority (including giving the senior address and getting into Northeastern, which I'll count as wins). But the code I had left behind started rotting. Tech debt piled up. The worse it got, the less I wanted to touch it.

It's a vicious cycle.

### The Unlock

What changed everything was access to Claude Code and GitHub Copilot.

For the first time, I could move at the pace of my actual ideas. Tech debt became just a small hurdle to get over before I could keep moving. One that was solveable in like 10 mins. I rediscovered what I actually loved about building things, which was making my (sometimes stupid) ideas somewhat a reality. I'll admit I've gotten a little lazy about knowing every line I'm writing, but I still deeply understand how my projects work at a fundamental level. The difference is that I'm making fewer mistakes and shipping more. I'm willing to trade that!

The harder part (and this is something I don't hear other devs talk about enough) is that **AI has its own preferences baked into its weights**. [Default choices about style, architecture, framework conventions](https://amplifying.ai/research/claude-code-picks/report). I have some genuinely strong opinions about how I like to build that _don't always_ line up with whatever is trending in the industry right now (and I can put up a killer argument for all of them.) The skill I've had to really get on this year is getting the AI to follow _my_ conventions instead of drifting toward its defaults. So the real craft now is less writing code, more reading it, and also staying in control of the architecture underneath it.

---

## The Week of Ship

![fenway park](/IMG_1693.png)

This past week was the first week I've had at home without classes since the school year started. I used it to actually finish and deploy the projects I've been building all year. I called it the **Week of Ship**, and here's how it went:

- **Monday:** (de)Motivator 14
- **Tuesday:** ArenaSwap finishing touches
- **Wednesday:** ArenaSwap 1.0 launch
- **Thursday:** Personal site and portfolio updates
- **Friday:** This post

### (de)Motivator 14

(de)Motivator is a side project that has quietly grown into its own little ecosystem over the past few years. On the surface, it's a cookie-clicker-style web app, but with insults. Underneath that, it's got accounts, leaderboards, achievements, easter eggs, database integrations, and a whole layer of systems that make it feel like a real product.

Version 14 was the biggest structural overhaul yet. We migrated everything into a **Turborepo monorepo** — which has become my new default development setup. We also pulled our npm package into the repo for better unity, upgraded backend architecture, and did serious UI polish to make the whole thing feel more cohesive and professional.

### ArenaSwap

ArenaSwap is a browser extension I built for people who watch multiple sports at once. It monitors live scores via ESPN's API, runs them through a custom algorithm I wrote called **PowerScore** — which calculates how exciting a game is in real time based on closeness, late-game tension, and momentum signals, and then automatically switches your browser tab to the best available game. It also has a bunch of quality-of-life features layered on top that make the whole sports-watching experience feel more intentional.

This week, I shipped the 1.0. It's been a project I've been quietly building and dogfooding since March, and it was satisfying to finally call it done enough to put a version number on it.

### Personal Site

This one was quieter. I stripped out a lot of the filler and fluff. I also updated my GitHub profile and resume to be more up to date.

---

## The Stack

![historic matthews arena in a hockey configuration lit up red before a game](/IMG_1782.png)

My current default stack, as of today:

- **Package manager:** npm (the original; I'm not switching)
- **Framework:** Next.js — there's really nothing like it
- **Language:** TSX for business logic, JSX for simpler templating
- **Styling:** Bootstrap for the heavy lifting, Tailwind for utilities, SCSS for helpers and customizing Bootstrap
- **Data fetching:** SWR
- **Monorepo:** Turborepo
- **Deployment:** GitHub Pages for statics, Firebase for anything dynamic
- **Database:** If needed, MongoDB + Prisma
- **Testing:** If needed, Jest
- **Build (statics):** Vite
- **AI assistant:** GPT 5.3-Codex on high reasoning


---

## What's Next

![Paul Revere statue in Boston's North End](/IMG_1865.png)

### (de)Motivator: The SvelteKit Port

The long-awaited next chapter for (de)Motivator is a full SvelteKit migration. Right now, it's a collection of static Svelte pages chained together, which got us this far, but isn't going to scale with the features we want to add. A proper dynamic framework will unlock a lot of things on both the DX and feature side.

### ArenaSwap: Going Deeper

For ArenaSwap, the focus is continuing to dogfood it and find the pain points. We want to deepen the PowerScore system with more data signals and keep refining the experience based on how we actually use it.

### Co-op

Going into sophomore year, this is the thing I'm most excited about: **co-op applications**. I feel like I'm actually ready to see what I can do in a real professional environment. That process starts next semester, and I'm genuinely looking forward to it.

The thing I'm most anxious about: CS 3000 — Object Oriented Design in Java. I see Java as a work of the devil 😠. We'll see how it goes.

---

## The End (of this academic year)

![The Boston Skyline seen from the Seaport Neighborhood during a snowy winter day](../../../public/IMG_2176.png)

I'm looking forward to a relaxing while still productive (just in other ways that are not school) summer at pools and at the beach. Either way, I still love this. Even after the hardest year of my life academically, I'm sitting here writing a blog post about the code I shipped this week.

That's probably a good sign.