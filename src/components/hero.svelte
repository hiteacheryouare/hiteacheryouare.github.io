<script>
import '../app.css'
import {
    robotStatus,
    DEVICE_type,
    OS,
    browser,
    cookieStatus
} from 'uadetect'
import Animals from './animals.svelte'
</script>

<main>
    <div class="bg-primary text-secondary pt-8 pb-96 text-center">
        <h1 class="font-secondary font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            UNDER <br> CONSTRUCTION 🚧
        </h1>
        <p class="font-secondary font-bold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
            This Site is Currently Under CONSTRUCTION
        </p>
        <Animals />
        {#if robotStatus === "ROBOT_controlled"}
           <p class="font-secondary font-bold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
            Get out of here you stinky robot :(
           </p> 
        {/if}
    </div>
</main>

<style>

</style>

