<script>
import '../app.css'
import { DEVICE_type } from 'uadetect'
import Animals from './animals.svelte'
import HeroTitle from './heroTitle.svelte'
const pfp = './img/pfp.png'
const pattern = './img/patternpad.svg'
if (DEVICE_type === "mobile") {
    document.getElementById('pfp').style.display = "none"
}
</script>

<main>
    <div class="bg-primary p-10 flex items-center justify-between">
        <HeroTitle />
        <img src={pfp} alt="Ryan Mullin" id="pfp">
    </div>
    <img src={pattern} alt="abstract pattern">
</main>

<style>
    img {
        width: 50%;
    }
</style>

