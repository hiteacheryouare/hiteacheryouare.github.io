---
layout: "../../layouts/blogPost.astro" #dont touch
title: "It's OK to love both React and Svelte" #Required
description: "Debunking React vs. Svelte: Emphasizing Developer Choice and Collaboration" #Required
author: "Ryan Mullin" #Required
pubDate: "July 13 2023" #Required
heroImage: 
    src: "/svr.jpg"
    alt: "svelte versus react"
---

Guess what? I'm a little mad right now. Do you want to know why? It's because we're treating these JavaScript `(libraries|frameworks)` like they're corperations like Apple and Samsung, both of which have amassed loyal, **cult** followings that would burn you at the stake if you showed signs of the supporting the other side on their side. But guess what, (although both React and Svelte are owned and maintained by Facebook and Vercel, respectively), these are still, at their hearts, open-source JavaScript frameworks!! They might even (_gasp_) share ideas with one another 😨😱


## How this started
This started after I watched [this video](https://youtu.be/bh-e700IlmQ) by [the Primeagen](https://www.youtube.com/@ThePrimeagen), where he reads and reacts to a blog post from a svelte developer. (Hi Prime if you're reading this one). The point of the post however, was to disprove one of the main arguments for react, and against svelte, that being the ecosystem around it. The post argued that svelte doesn't have a large ecosystem because the framework itself is pretty batteries-icluded when it comes to common tasks such as state management, scoped css, transitions, etc. However, this is what got me thinking.


## Does it really matter that much?
Short answer: **no.**  <br />
Long answer: **no.** (but with more words)

You see, I would call myself both an avid React and Svelte developer. I've bult applications at scale with both of them (although React was with Next, I believe it was a vaild and neccesary abstraction), and I love the ergonmics of both libaries. For Svelte, it has quite frankly never been easier to build large scale, simply reactive, fast, "it just works" apps, with the magic of the Svelte compiler. However, with React, I love how close it stays to JavaScript at its core. Using ternarys to convey conditionals in the UI is exactly what my JS-brain would have thought of. Using `array.map()` to loop over an array and display it in the UI feels like the "official JavaScript way of doing things". React feels like an extension of JavaScript, while Svelte feels more like a all or nothing solution. And guess what, **that's totally OK!**


## It's not the arrow, its the archer

Guess what? If you can build a website with Svelte, and that feels most comfortable to you, then do it. If you can do it better in Vue, do it. If you can do it better in React, do it. If you can do it better in a obscure ARM64 assembly language designed by a russian cybercriminal who's been on the CIA's most wanted list for the past 30 years, **then do it.**

My point is that it's not the tools we use to build these amazing apps. It's the amazing developer who makes the amazing apps. If you can make your app amazing, nobody cares what you used to build it. Take [SoFi stadium](https://www.sofistadium.com/) in Los Angeles for example (pictured below). It is (in my opinion) one of the most beautiful studtures built in the modern world, and a complete engineering marvel. Notice how nobody is asking if it was built with Stanley or Black & Decker tools? Literally nobody cares what it was built with, as long as it looks good and is fuctional, you'll get the praise either way.

![SoFi Stadium](https://th.bing.com/th/id/R.edf274dfa51ee153059fcced1343da84?rik=UCt2EeWGQvrT1g&pid=ImgRaw&r=0)


## Let's fix this

There is only one true way to fix this dilemma. Give up our egos. Since that's not possible, (espcially as developers), we should all at least try to support each others choice in tooling. Both React and Svelte are amazing tools, and have been used to build some of the most amazing apps that push the boundries of what the web platform can do everyday. Arguing over which tool is better is a waste of time, becuase at the end of the day, they're just tools. Tools to make the best apps possible.


_-ry_