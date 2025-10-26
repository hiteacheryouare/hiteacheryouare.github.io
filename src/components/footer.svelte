<script lang="ts">
    var year = new Date()
    import {navigation as footerLinks} from '../utils/navigation'
    import {socialLinks} from '../utils/socialContacts'
</script>

<footer class="bg-gray-900 dark:bg-black py-8">
    <div class="container mx-auto flex flex-col items-center">
        <img src="/wordmark-over-comcast-bar-white.png" alt="Ryan Mullin" id="logo" class="mb-4">
         <div class="flex justify-center space-x-8 mb-4 links-container">
            {#each footerLinks as link}
                <a href={link.href} class="">{link.name}</a>
            {/each}
        </div>
        <hr class="w-full border-t border-gray-700 mb-4" />
        <p class="text-white text-center">&copy; {year.getFullYear()}, Ryan Mullin. All Rights Reserved</p>
        <div class="flex justify-center space-x-8 mb-4 links-container">
            {#each socialLinks as link}
                <a href={link.href} class="" aria-label="icon">
                    <!-- svelte-ignore element_invalid_self_closing_tag -->
                    <i class={`bi bi-${link.icon}`} />
                </a>
            {/each}
        </div>

    </div>
</footer>

<style>
    #logo {
        width: 20rem;
    }
    @media (orientation: portrait) {
        #logo {
            width: 5rem;
        }
    }
    a {
        color: white;
        text-decoration: none;
    }
    hr {
        border: 1px solid white;
    }
    * {
        margin-bottom: 0;
    }
    .container {
        max-width: 1200px;
        padding: 0 1rem;
    }
    @media (max-width: 640px) {
        .links-container {
            flex-direction: column;
            space-x-8: 0;
            space-y-4: 1rem;
        }
    }
</style>