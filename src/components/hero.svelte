<script>
import '../app.css'
import Animals from './animals.svelte'
import { DEVICE_type } from "uadetect";
import HeroTitle from './heroTitle.svelte'
const pfp = './img/pfp.png'
const pattern = './img/patternpad.svg'
</script>

<main>
    <div class="bg-primary p-10 flex items-center justify-between">
        <HeroTitle />
        {#if DEVICE_type === "mobile"}
            <div></div>
        {:else if DEVICE_type === "desktop"}
            <img src={pfp} alt="Ryan Mullin" id="pfp">
        {:else}
            <div></div>
        {/if}
    </div>
    <img src={pattern} alt="abstract pattern" id="pattern">
</main>

<style>
    #pfp {
        width: 25%;
        border-radius: 68px;
    }
    #pattern {
        margin: auto;
    }
</style>

