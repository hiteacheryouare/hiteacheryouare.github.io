<script lang="ts">
    const year = new Date().getFullYear();
    import { navLinks as footerLinks } from '../utils/navigation';
    import { socialLinks } from '../utils/socialContacts';
    import { statusConfig } from '../utils/statusIndicator';
    export let availability: 'available' | 'busy' | 'unavailable';
    import {sample as randomInArray} from '../utils/arrayRandomItem';

    const giraffeFacts =  [
        "Giraffes are the tallest land animals, reaching up to 18 feet (5.5 meters) in height",
        "A giraffe's long neck contains the same number of vertebrae as a human neck (7)",
        "Giraffes have a 20-inch (50 cm) long prehensile tongue used to grasp leaves",
        "Baby giraffes (calves) drop about 6 feet to the ground when born",
        "Giraffes can run up to 35 mph (56 km/h) in short bursts",
        "A giraffe's heart weighs about 25 pounds and is the largest of any land animal",
        "Giraffes only need to drink water once every few days",
        "Each giraffe has a unique spot pattern, like a fingerprint",
        "Giraffes are mostly silent but can make low-frequency sounds below human hearing",
        "Giraffes sleep standing up and only need 30 minutes to 2 hours of sleep daily",
        "A giraffe can see in color and has excellent vision with a 350-degree view",
        "Giraffes cannot jump or swim well due to their long legs",
        "Male giraffes use their ossicones (horn-like protrusions) to fight each other",
        "Giraffes spend most of their day eating, consuming up to 75 pounds of leaves daily",
        "The scientific name for the giraffe is Giraffa camelopardalis",
        "Giraffes have blue-black tongues that can extend to wrap around branches",
        "A giraffe's legs are about 6 feet long and can deliver powerful kicks",
        "Giraffes were once thought to be a cross between a camel and a leopard",
        "In Africa, giraffes are called 'Twiga' which means 'fast-walker'",
        "Giraffes have no vocal cords to produce loud sounds",
        "Giraffes are the best animals ever!"
    ];

    const hedgehogFacts = [
        "Hedgehogs have about 5,000 to 7,000 spines on their bodies",
        "A hedgehog can curl into a ball in less than a second",
        "Hedgehogs have poor eyesight but excellent hearing and smell",
        "Baby hedgehogs are called hoglets or kits",
        "Hedgehogs can run up to 9 mph (14 km/h)",
        "A hedgehog's spines are made of keratin, the same material as human fingernails",
        "Hedgehogs are immune to snake venom due to a protein in their blood",
        "Hedgehogs can have fleas and not be bothered by them",
        "A hedgehog has about 44 teeth",
        "Hedgehogs are primarily nocturnal animals",
        "Hedgehogs cannot see in color, only in shades of gray",
        "A hedgehog's heart rate can be 250 beats per minute",
        "Hedgehogs are found naturally on every continent except Antarctica",
        "Hedgehogs can eat up to 40% of their body weight in one night",
        "Hedgehogs are lactose intolerant despite popular belief in media",
        "Sonic the Hedgehog was inspired by real hedgehogs' speed",
        "Hedgehogs have been on Earth for over 15 million years",
        "A hedgehog's spine covers about 30% of its body",
        "Hedgehogs communicate through grunts, snuffles, and clicking sounds",
        "Hedgehogs can hold their breath for up to 40 minutes",
        "Hedgehogs can self-anoint by licking something and putting spit on their spines",
        "Hedgehogs have been featured in Japanese culture for thousands of years",
        "A hedgehog's temperature is about 96-98 degrees Fahrenheit",
        "Hedgehogs cannot produce their own vitamin C",
        "Hedgehogs are solitary animals and prefer to live alone",
        "A hedgehog's quills don't shoot out like porcupine quills",
        "Hedgehogs have a white stripe down their back called a 'white-bellied hedgehog' trait in some species",
        "Hedgehogs can learn their names and come when called",
        "In medieval times, hedgehogs were thought to steal milk from cows",
        "Hedgehogs make excellent pest controllers, eating insects and small rodents",
        "Hedgehogs were historically used to predict the weather",
        "A hedgehog's lifespan in the wild is typically 3-7 years",
        "Hedgehogs are the cutest animals ever!"
    ]

    let giraffeFact = Math.random() < 0.5 ? true : false;
    var animalFact
    if (giraffeFact) {
        animalFact = `${randomInArray(giraffeFacts)} 🦒`;
    } else {
        animalFact = `${randomInArray(hedgehogFacts)} 🦔`;
    }
    
    $: currentStatus = statusConfig[availability];
</script>

<footer class="relative overflow-hidden bg-gray-900 dark:bg-black border-t border-gray-800">
    <!-- Decorative gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/10 pointer-events-none"></div>
    
    <div class="relative container mx-auto px-6 py-16">
        <!-- Main Footer Content -->
        <div class="grid md:grid-cols-3 gap-12 mb-12">
            <!-- Logo & Tagline Section -->
            <div class="space-y-4">
                <img 
                    src="/wordmark-over-comcast-bar-white.png" 
                    alt="Ryan Mullin" 
                    class="footer-logo mb-4"
                >
                <p class="text-gray-400 text-sm leading-relaxed max-w-xs font-mono">
                    // {animalFact}
                </p>
            </div>

            <!-- Navigation Links -->
            <div class="space-y-4">
                <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <div class="h-px w-8 bg-primary"></div>
                    Quick Links
                </h3>
                <nav class="flex flex-col space-y-3">
                    {#each footerLinks as link}
                        <a 
                            href={link.href} 
                            class="text-gray-400 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-2 group"
                        >
                            <i class="bi bi-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            {link.name}
                        </a>
                    {/each}
                </nav>
            </div>

            <!-- Social & Contact Section -->
            <div class="space-y-4">
                <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
                    <div class="h-px w-8 bg-primary"></div>
                    Connect
                </h3>
                <div class="flex gap-3 flex-wrap">
                    {#each socialLinks as social}
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 rounded-full border border-gray-700 hover:border-primary flex items-center justify-center text-gray-400 hover:text-secondary transition-all hover:scale-110"
                            aria-label={social.text || social.icon}
                        >
                            <i class={`bi bi-${social.icon}`}></i>
                        </a>
                    {/each}
                </div>
                <div class="pt-4">
                    <a 
                        href="mailto:rpmullin17@gmail.com"
                        class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors group"
                    >
                        <i class="bi bi-envelope-fill"></i>
                        <span class="border-b border-transparent group-hover:border-secondary transition-colors">
                            rpmullin17@gmail.com
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-800 pt-8">
            <!-- Bottom Section -->
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <!-- Copyright -->
                <p class="text-white text-sm font-mono">
                    © {year} Ryan Mullin. All rights reserved.
                </p>

                <!-- Location & Status -->
                <div class="flex items-center gap-6 text-sm">
                    <div class="flex items-center gap-2 text-white">
                        <i class="bi bi-geo-alt-fill text-white"></i>
                        <span class="font-mono">Boston, MA & Philadelphia, PA</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class={`w-2 h-2 rounded-full ${currentStatus.color} ${currentStatus.animate ? 'animate-pulse' : ''}`}></div>
                        <span class="text-white font-mono text-xs">{currentStatus.text}</span>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
        <div class="flex content-center justify-center gradient-bar text-white p-2 text-xl">
			Website built with ❤️ by&nbsp;
			<a href="https://hiteacheryouare.github.io/freelance/" class="underline text-secondary">Ryan Mullin</a>
		</div>
</footer>

<style>
    .footer-logo {
        width: 16rem;
        height: auto;
        transition: opacity 0.3s ease;
    }

    .footer-logo:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        .footer-logo {
            width: 12rem;
        }
    }

    @media (max-width: 640px) {
        .footer-logo {
            width: 10rem;
        }
    }

    .container {
        max-width: 1200px;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    /* Smooth scrolling for anchor links */
    :global(html) {
        scroll-behavior: smooth;
    }

    .gradient-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, 
            #fdb913ff, 
            #f36f21ff, 
            #c9234aff, 
            #645faaff, 
            #0089cfff, 
            #0db14bff);
        color: white;
        padding: 0.5rem;
        font-size: 1.25rem;
    }
</style>