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

Select and multi-select, but with a twist: it includes built-in virtualization. This allows for rendering long lists without a performance hit. 

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

> Requested by: @CoconutLoader

I couldn't achieve this with the original shadcn-svelte select, so I had to write almost everything from scratch, which took a bit longer than I initially expected. Please report any bugs you find, and I'll make sure to fix them.

