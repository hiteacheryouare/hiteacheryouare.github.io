<script lang="ts">
    const styles: string[] = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "light",
        "dark"
    ]
    import {sample} from '../utils/arrayRandomItem'
    export let text: string;
</script>


<span class="badge text-bg-{sample(styles)}">{text}</span>