---
layout: "../../layouts/blogPost.astro" #dont touch
title: "Vercel is Vendor Locking React" #Required
description: "Why I'm not a fan of Vercel's Next.js lock-in strategy" #Required
author: "Ryan Mullin" #Required
pubDate: "Mar 17 2023" #Required
heroImage: 
    src: "/vercel.bmp"
    alt: "The vercel logo"
urlBase: "vercel-vendor-locking-react" # don't touch
slug: vercel-vendor-locking-react
---

# Why I'm not a fan of Vercel's Next.js lock-in strategy

Next.js is a popular React framework that offers many features out of the box, such as server-side rendering, static site generation, code splitting, and more. It's developed and maintained by Vercel, a cloud platform that provides hosting and serverless functions for Next.js applications.

You might think that this is a perfect match: Next.js and Vercel are made by the same team, so they should work seamlessly together. And they do... until you want to use something else.

Vercel has been gradually introducing features that make it harder to use Next.js with other platforms or services. For example:

- Vercel has its own configuration file (`vercel.json`) that overrides some of the settings in `next.config.js`, such as `buildCommand`, `devCommand`, `outputDirectory`, etc. This means that you have to maintain two different configuration files for your Next.js project, depending on where you deploy it.
- Vercel has its own proprietary way of handling serverless functions (`api` directory), which is not compatible with other providers like AWS Lambda or Netlify Functions. If you want to use serverless functions with Next.js on another platform, you have to use a different approach (such as `next-on-netlify` or `serverless-nextjs`).
- Vercel has its own install command (`vercel dev`) that detects and installs dependencies based on certain conditions (such as presence of `pnpm-lock.yaml` file). This can cause issues if you use a different package manager (such as Yarn) or have custom scripts for installing dependencies.
- Vercel has its own framework detection mechanism that automatically sets up some features for Next.js projects (such as redirects, rewrites, headers, etc). This can be convenient, but it also limits your control over how your project is deployed and configured.

All these features make it easier to use Next.js on Vercel, but they also make it harder to use Next.js anywhere else. This is what I call vendor lock-in: a situation where you become dependent on a specific vendor for using a product or service.

Vendor lock-in is bad for several reasons:

- It reduces your flexibility and choice. You can't easily switch to another platform or service if you're unhappy with Vercel's pricing, performance, reliability, support, etc.
- It increases your risk and dependency. You're putting all your eggs in one basket: if something goes wrong with Vercel (such as downtime, security breach, policy change), your whole project is affected.
- It stifles innovation and competition. You're less likely to explore other options or alternatives that might offer better features or solutions for your project.

Don't get me wrong: I think Vercel is a great platform and I appreciate their work on Next.js. But I don't like how they're trying to tie Next.js users to their platform with these lock-in strategies.

I think Next.js should be more open and agnostic about where and how it can be deployed. It should allow users to choose their own configuration files (`next.config.js`), serverless functions (`pages/api`), install commands (`npm install`), framework detection mechanisms (`package.json`), etc.

I hope Vercel will reconsider their approach and make Next.js more friendly for other platforms and services. Until then, I'll be looking for ways to avoid their lock-in traps and keep my options open.