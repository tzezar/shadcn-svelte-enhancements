---
title: Code Snippet
source: https://github.com/tzezar
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
</script>

# {title}

Renders a formatted block of code with syntax highlighting for readability.

<br/>

<Link href={source}>Component source</Link>

## Example

<CodePreview code={examples.example.code} class="">
<examples.example.component />
</CodePreview>


## Usage

<CodeBlock code={examples.usage.code} lang='svelte'/>