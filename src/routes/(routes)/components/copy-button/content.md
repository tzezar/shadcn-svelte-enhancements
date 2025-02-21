---
title: Copy Button
source: https://github.com/tzezar
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
</script>

# {title}

Provides a button to copy text or code to the clipboard with a single click.

<br/>

<Link href={source}>Component source</Link>

## Example

<CodePreview code={examples.example.code} class="">
<examples.example.component />
</CodePreview>

## Usage

<CodeBlock code={examples.usage.code} lang='svelte'/>