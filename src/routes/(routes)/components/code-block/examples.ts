import exampleRaw from './example.svelte?raw'
import example from './example.svelte'


const usageCode = `<script>
	import { CodeBlock } from '$lib/components/tzezars-enhancements/code-block';
</script>

<CodeBlock {code} lang="" variant="" />`


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