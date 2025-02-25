---
title: Virtual select
component: virtial-select
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>


# {title}

A dual-list component for moving items between two lists, commonly used for selections.

<br/>

<Link href={createGitHubLink(component)}>Component source</Link>

## Horizontal

<CodePreview code={examples.code.vs} class="">
    <examples.components.vs />
</CodePreview>

## Vertical

<CodePreview code={examples.code.vsm} class="">
    <examples.components.vsm />
</CodePreview>

## Usage

