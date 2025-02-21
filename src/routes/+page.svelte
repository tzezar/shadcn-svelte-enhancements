<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';

	import logoBlack from '$lib/assets/img/tzezar-logo-black.png';
	import logoWhite from '$lib/assets/img/tzezar-logo-white.png';

	import { mode } from 'mode-watcher';

	let schema = $derived($mode || 'dark');
</script>

<style>
	@keyframes pulse-scale {
		0%, 100% {
			transform: scale(0.8);
			opacity: 0.5;
		}
		50% {
			transform: scale(0.9);
			opacity: 1;
		}
	}

	.pulsate {
		animation: pulse-scale 4s infinite ease-in-out;
	}
</style>

<div class='flex flex-1 flex-col gap-4 p-4 pt-0 shrink-0 h-screen'>
	<div class="mx-auto grid max-w-screen-2xl gap-10 py-4 md:grid-cols-2 p-4 lg:p-10 md:my-auto my-4 ">
		<div class="my-auto flex flex-col gap-4 lg:gap-8">
			<Badge variant="outline" class="w-fit rounded-lg px-2 py-1">🚀 Speed up your development</Badge>
			<h1 class="text-4xl font-bold lg:text-7xl">Blocks and utilities built with Shadcn Svelte</h1>
			<h2 class="text-xl font-normal text-secondary-foreground">
				Finely crafted components that you can copy and paste into your apps.
			</h2>
			<div class="flex gap-2">
				<Button size="sm" href='/components/avatar-group'>Discover all components</Button>
				<Button size="sm" variant="outline" href="https://github.com/tzezar">View on GitHub <ArrowRight /></Button>
			</div>
		</div>
		<div class='group bg-muted/50 hover:bg-muted transition-all  aspect-square'>
			{#if schema === 'dark'}
				<img src={logoWhite} alt="" class="pulsate aspect-square rounded-xl p-20 opacity-50 group-hover:opacity-100" />
			{:else}
				<img src={logoBlack} alt="" class="pulsate aspect-square rounded-xl p-20 opacity-50 group-hover:opacity-100" />
			{/if}
		</div>
	</div>
	
</div>