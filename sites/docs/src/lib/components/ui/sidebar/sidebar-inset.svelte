<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>


<main
	bind:this={ref}
	class={cn(
		"bg-background flex flex-col w-full overflow-hidden",
		// md:peer-data-[variant=inset]:m-2
		"peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]   md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:shadow",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</main>
