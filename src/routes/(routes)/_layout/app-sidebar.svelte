<script lang="ts" module>
</script>

<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import NavMain from './nav-main.svelte';
	import NavSecondary from './nav-secondary.svelte';

	import logoWhite from '$lib/assets/img/tzezar-logo-white.png';
	import logoBlack from '$lib/assets/img/tzezar-logo-black.png';
	import { mode } from 'mode-watcher';
	import { navigationData } from './navigation-data';

	let schema = $derived($mode || 'dark');

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div
								class="flex aspect-square size-8 items-center justify-center rounded-lg bg-foreground text-sidebar-primary-foreground"
							>
								{#if schema === 'dark'}
									<img class="size-4" src={logoBlack} alt="" />
								{:else}
									<img class="size-4" src={logoWhite} alt="" />
								{/if}
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-semibold">Tzezar's</span>
								<span class="truncate text-xs">Shadcn-Svelte Enhacements</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={navigationData.navMain} />
		<!-- <NavProjects projects={data.projects} /> -->
		<NavSecondary items={navigationData.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<!-- <NavUser user={data.user} /> -->
	</Sidebar.Footer>
</Sidebar.Root>
