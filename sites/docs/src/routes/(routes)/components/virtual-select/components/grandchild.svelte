<script lang="ts">

	let { state } = $props();

    console.log(state)
</script>

<div>
    {state?.value}
</div>
