---
title: Virtual Select
component: virtual-select
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>


# {title}

Efficiently handle large datasets with a virtualized select component


<br/>

<Link href={createGitHubLink(component)}>Component source</Link>

## Single choice

<CodePreview code={examples.code.vs} class="">
    <examples.components.vs />
</CodePreview>

## Multiple choices

<CodePreview code={examples.code.vsm} class="">
    <examples.components.vsm />
</CodePreview>

## Usage

<CodeBlock code={examples.code.samples.usage} lang='svelte'/>
