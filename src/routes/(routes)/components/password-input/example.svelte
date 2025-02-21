<script lang="ts">
	import {PasswordInput} from '$lib/components/tzezars-enhancements/password-input';

	let value = $state('Hello There');
	let showPassword = $state(false);
</script>

<div class="flex flex-col gap-1">
	<PasswordInput bind:value bind:showPassword />
	<p class="text-xs">
		{#if showPassword}
			There Is No Secret Ingredient. It's Just You.
		{:else}
			All Right Then, Keep Your Secrets.
		{/if}
	</p>
</div>
