<script lang="ts">
	import type { SelectGroupProps } from "bits-ui";
	import { box, mergeProps } from "svelte-toolbelt";

	let {
		id,
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: SelectGroupProps = $props();


</script>

{@render children?.()}


