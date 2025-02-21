import exampleRaw from './example.svelte?raw'
import example from './example.svelte'

const usageCode = `<script lang="ts">
	import PasswordInput from '$lib/components/tzezars-enhancements/password-input';

	let value = $state('');
	let showPassword = $state(false);
</script>

<PasswordInput bind:value bind:showPassword />
`

const examples = {
    example: {
        code: exampleRaw,
        component: example
    },
    usage: {
        code: usageCode
    }
}

export { examples }