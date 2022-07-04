<script>
import NavBar from "./components/navBar.svelte";
import './app.css';
import Hero from "./components/hero.svelte";
import Spinner from "./components/spinner.svelte";
import { onMount } from 'svelte';
let ready = false;
onMount(() => ready = true);

</script>

<main>
    {#if ready == false}
        <Spinner />
    {/if}
    {#if ready}
        <NavBar />
        <Hero />
    {/if}
</main>

<style>
  
</style>