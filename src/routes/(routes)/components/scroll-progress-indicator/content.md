---
title: Scroll Progress Indicator
source: https://github.com/tzezar
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
</script>

# {title}

A visual tracker showing the user’s scroll position on a page or container.


<br/>

<Link href={source}>Component source</Link>


## Example

<CodePreview code={examples.interactiveDemo.code} class="">
<examples.interactiveDemo.component/>
</CodePreview>

## Usage

<CodeBlock code={examples.usage.code} lang='svelte' />

## Custom Circle

<CodePreview code={examples.example.code} class="">
<examples.example.component/>
</CodePreview>


## Custom Bar

<CodePreview code={examples.exampleBar.code} class="">
<examples.exampleBar.component/>
</CodePreview>


