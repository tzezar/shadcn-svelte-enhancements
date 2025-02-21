src/routes/_layout/app-sidebar.svelte<script lang="ts" module>
	// This is sample data.
	import logo from '$lib/assets/img/tzezar-logo-white.png';

	const data = {
		// changes: [
		// 	{
		// 		file: "README.md",
		// 		state: "M",
		// 	},
		// 	{
		// 		file: "routes/+page.svelte",
		// 		state: "U",
		// 	},
		// 	{
		// 		file: "routes/+layout.svelte",
		// 		state: "M",
		// 	},
		// ],
		tree: [
			[
				'svelte',
				[
					'components',
					{
						title: 'avatar-group.svelte',
						url: '/abc',
						icon: SvelteIcon
					},
					'code-block.svelte',
					'code-snippet.svelte',
					'copy-button.svelte',
					'file-dropzone.svelte',
					'link.svelte',
					'password-input.svelte',
					'scroll-progress-indicator.svelte',
					'transfer-list.svelte'
				],
				'utils.ts'
			]
		]
	};
</script>

<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import File from 'lucide-svelte/icons/file';
	import Folder from 'lucide-svelte/icons/folder';
	import type { ComponentProps } from 'svelte';
	import SvelteIcon from './svelte-icon.svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
							>
								<img class="size-4" src={logo} alt="" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-semibold">Tzezar's</span>
								<span class="truncate text-xs">Enhacements</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Files</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each data.tree as item, index (index)}
						{@render Tree({ item })}
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
{#snippet Tree({ item }: { item: string | any[] })}
	{@const [name, ...items] = Array.isArray(item) ? item : [item]}
	{#if !items.length}
		<a href={name.url}>
			<Sidebar.MenuButton
				isActive={name === 'button.svelte'}
				class="data-[active=true]:bg-transparent"
			>
				{#if name.icon}
					<name.icon/>
				{:else}
					<File />
				{/if}
				{name.title}
			</Sidebar.MenuButton>
		</a>
	{:else}
		<Sidebar.MenuItem>
			<Collapsible.Root
				class="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				open={name === 'svelte' || name === 'components'}
			>
				<Collapsible.Trigger>
					{#snippet child({ props })}
						<Sidebar.MenuButton {...props}>
							<ChevronRight className="transition-transform" />
							<Folder />
							{name}
						</Sidebar.MenuButton>
					{/snippet}
				</Collapsible.Trigger>
				<Collapsible.Content>
					<Sidebar.MenuSub>
						{#each items as subItem, index (index)}
							{@render Tree({ item: subItem })}
						{/each}
					</Sidebar.MenuSub>
				</Collapsible.Content>
			</Collapsible.Root>
		</Sidebar.MenuItem>
	{/if}
{/snippet}
