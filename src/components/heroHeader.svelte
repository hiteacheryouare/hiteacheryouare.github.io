<script lang="ts">

    export let title: string
    
</script>
<h1 class="">
    <span class="gradient-bar text-4xl font-bold tracking-tighter gradientText sm:text-6xl xl:text-7xl pb-2 dark:text-white">{title}</span>
</h1>

<style>
    .gradient-bar {
        color: transparent;
        background: linear-gradient(to right, 
            #fdb913ff, 
            #f36f21ff, 
            #c9234aff, 
            #645faaff, 
            #0089cfff, 
            #0db14bff);
        -webkit-background-clip: text;
        background-clip: text;
        display: inline-block;
    }
</style>