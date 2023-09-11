<script lang="ts">
    var year = new Date()
    import {navigation as footerLinks} from '../utils/navigation'
</script>
<div class="flex">
    <slot><img src="/pattern.svg" alt="" id="pattern"></slot>
</div>

<footer class="bg-gray-900 dark:bg-black">
    <div class="flex justify-between content-center">
        <div class="flex justify-between flex-col">
            <img src="/faviWhite.svg" alt="two right facing arrows" id="logo">
            <hr />
            <p class="text-white p-4">Copyright &copy; {year.getFullYear()}, Ryan Mullin. All Rights Reserved</p>
        </div>
        <div class="flex justify-between flex-col p-4 text-white underline">
            {#each footerLinks as link}
                <a href={link.href}>{link.name}</a>
            {/each}
        </div>
    </div>
</footer>

<style>
    #logo {
        width: 20%;
        padding: 2rem;
    }
    @media (orientation: portrait) {
        #logo {
            width: 5rem;
        }
    }
    a {
        color: white;
        text-decoration: underline;
    }
    a:hover {
        color: hsl(247, 79%, 32%)
    }
    hr {
        border: 1px solid white;
    }
    @media (prefers-color-scheme: dark) {
        a:hover {
            color: hsl(184, 66%, 28%);
        }
    }
    * {
        margin-bottom: 0;
    }
</style>