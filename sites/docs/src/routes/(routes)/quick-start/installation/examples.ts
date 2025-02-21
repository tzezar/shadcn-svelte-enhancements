
const codeBlock = `✔ Where do you want to place components? ./src/lib/components/tzezars-enhancements
✔ Select components to install (use space to select multiple):
[x] avatar-group
[x] code-block
[ ] code-snippet
... `

const usageCode = `<script lang="ts">
	import { CodeSnippet } from '$lib/components/tzezars-enhancements/code-snippet';
</script>

<CodeSnippet content="" />`



const examples = {
    promt: {
        code: codeBlock
    },
    usage: {
        code: usageCode
    }
}

export { examples }