<script lang="ts">
    import sample from "../utils/arrayRandomItem";
    export let title: string
    const gradients = [
        `from-red-600 via-blue-600 to-blue-900`,
        `from-yellow-500 to-teal-500`,
        `from-teal-500 to-violet-500`,
        `from-blue-500 to-pink-500`,
        `from-blue-700 to-primary`,
        `from-primary to-secondary via-tertiary`
    ]
    // grab a random item in an array
    
</script>
<h1 class="mainHeader">
    Ryan Mullin's <span class="text-transparent bg-clip-text bg-gradient-to-br {sample(gradients)}">{title}</span>
</h1>