<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { RefreshCw } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { CodeBlock } from '../code-block';
	import { cn } from '$lib/utils';

	type Props = {
		code: string;
		replay?: boolean;
		class?: string;
		children: Snippet<[]>;
	};

	let { children, code, class: _class = undefined, replay = false }: Props = $props();

	let tab: 'preview' | 'code' = $state('preview');
</script>

<div class={cn('flex w-full flex-col', _class)}>
	<Tabs.Root bind:value={tab} class="flex min-h-[400px] flex-col">
		<Tabs.List class="flex justify-start rounded-none rounded-t-lg border border-b-0 ">
			<Tabs.Trigger class="m-0" value="preview">Preview</Tabs.Trigger>
			<Tabs.Trigger class="m-0" value="code">Code</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="preview" class="mt-0 h-full rounded-b-md border pt-0 ">
			{#if replay}
				<Button size="icon" variant="ghost" class="absolute left-3 top-3">
					<RefreshCw class="size-4" />
				</Button>
			{/if}
			<div class="flex h-full items-center justify-center p-4">
				{@render children()}
			</div>
		</Tabs.Content>

		<Tabs.Content value="code" class="mt-0 rounded-b-md border">
			<CodeBlock
				lang="svelte"
				{code}
				class="size-full border-none"
				hideLineNumbers
				hideCopyButton
			/>
		</Tabs.Content>
	</Tabs.Root>
</div>
