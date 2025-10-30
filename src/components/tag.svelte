<script lang="ts">
    const styles: string[] = [
        "primary",
        "secondary",
        "dark"
    ]

    const darkCompatibleStyles: string[] = [
        "light",
        "primary",
        "secondary",
    ]
    import {sample} from '../utils/arrayRandomItem'
    export let text: string;
    let darkMode: boolean = false
    function detectDarkMode() {
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (darkMode = true)
        : (darkMode = false);
    }
    detectDarkMode();
    
</script>


<span class="badge text-bg-{sample(darkMode ? darkCompatibleStyles : styles)}">{text}</span>