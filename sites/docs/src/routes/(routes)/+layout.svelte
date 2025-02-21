<!-- <script lang="ts">
	let { children } = $props();
</script>

{@render children()} -->

<script lang="ts">
	import '../../app.css';
	import { ModeWatcher } from "mode-watcher";

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from './_layout/app-sidebar.svelte';
	import LightSwitch from './_components/light-switch.svelte';
	import { page } from '$app/stores';
	import { SIDEBAR_WIDTH } from '$lib/components/ui/sidebar/constants';


	let { children } = $props();


	let pathSegments = $derived($page.url.pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: '/' + array.slice(0, index + 1).join('/')
    })))

</script>
<ModeWatcher />
<Sidebar.Provider>
	<AppSidebar />
	<!-- <div class='flex flex-col overflow-hidden w-full'>
		
	</div> -->

	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 sticky top-0 z-50 bg-background border-b">
			<div class="flex items-center gap-2 px-4 z-[100]">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href='/'>Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						{#each pathSegments as segment, i}
						<Breadcrumb.Separator class="hidden md:block" />
							<Breadcrumb.Item class="hidden md:block">
								<Breadcrumb.Link href={segment.href}>{segment.label}</Breadcrumb.Link>
							</Breadcrumb.Item>
						{/each}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
			<div class="ml-auto pr-3">
				<LightSwitch />
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4 pt-0 md:pb-8">
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
