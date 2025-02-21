---
title: Link
source: https://github.com/tzezar
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
</script>


# {title}

A stylized anchor element for navigating to external or internal pages.

<br/>

<Link href={source}>Component source</Link>

## Example

<CodePreview code={examples.link.code} class="">
<examples.link.component />
</CodePreview>


## Usage

<CodeBlock code={examples.linkUsage.code} lang='svelte' />