<script lang="ts">
    export let type: "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "light" | "dark";
    export let icon: string;
    export let text: string;
    export let actionLink: string;
    export let actionText: string;
    const load = async () => {
      await import('bootstrap/js/dist/alert')
    }
    import { fade } from 'svelte/transition'
</script>

<div transition:fade class="alert alert-{type} d-flex align-items-center alert-dismissible" role="alert" on:mouseover={load} on:focus={load}>
    <span>
        <i class={`bi bi-${icon} pr-1`} />
    </span>
      &nbsp;
    <span>
      {text}
    </span>
    &nbsp;
    <span>
      <a class="alert-link" href={actionLink}>{actionText}</a>      
    </span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>