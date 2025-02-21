---
title: Transfer List
source: https://github.com/tzezar
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
</script>


# {title}

A dual-list component for moving items between two lists, commonly used for selections.

## Horizontal

<CodePreview code={examples.horizontal.code} class="">
<examples.horizontal.component />
</CodePreview>

## Vertical

<CodePreview code={examples.vertical.code} class="">
    <examples.vertical.component />
</CodePreview>

## Usage

<CodeBlock code={examples.usage.code} lang='svelte'/>
