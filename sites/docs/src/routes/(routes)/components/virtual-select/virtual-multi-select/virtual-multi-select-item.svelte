<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		index: number | string;
		item: any;
		selectedValues: any[];
		highlightedItemIndex: number;
		handleSelect: (item: any, index: number) => void;
	};

	const { index, item, selectedValues, highlightedItemIndex, handleSelect }: Props = $props();
</script>

<div
	role="option"
	aria-selected={highlightedItemIndex === index}
	class={cn('w-full cursor-pointer p-2', {
		'!bg-red-400': selectedValues.map((item) => item.value).includes(item.value),
		'bg-secondary': highlightedItemIndex === index
	})}
	data-index={index}
	tabindex="0"
	onclick={() => {
		handleSelect(item, +index);
	}}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			handleSelect(item, +index);
		}
	}}
>
	Row: #{index} Item: {item.label}
</div>
