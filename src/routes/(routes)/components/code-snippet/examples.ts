import exampleRaw from './example.svelte?raw'
import example from './example.svelte'

const usageCode = `<script lang="ts">
	import { CodeSnippet } from '$lib/components/tzezars-enhancements/code-snippet';
</script>

<CodeSnippet content="" />`

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