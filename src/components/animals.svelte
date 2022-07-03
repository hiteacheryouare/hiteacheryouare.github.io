<script>
    const getAnimal = async () => {
        const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        const data = await response.json();
        const animal = data.image_link;
        return animal
    }
    const getAnimalName = async () => {
        const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        const data = await response.json();
        const animalName = data.name;
        return animalName
    }
    let animalPromise = getAnimal();
    let namePromise = getAnimalName();
    import '../app.css'
</script>


<main>
    <p class="text-center font-primary text-3xl font-bold">
        {#await animalPromise}
            <p class="text-center font-primary text-2xl">
                Loading...
            </p>
        {:then animal} 
            <img src={animal} alt="animal" class="m-auto p-4">
        {/await}
    </p>
    <p class="text-center font-primary text-xl">
        {#await namePromise}
            <p class="text-center font-primary text-2xl">
                Loading...
            </p>
        {:then animalName} 
            <p class="text-center font-primary text-2xl">
                This is a {animalName}
            </p>
        {/await}
    </p>
</main>

<style>
    img {
        width: 50%;
        height: auto;
    }
</style>