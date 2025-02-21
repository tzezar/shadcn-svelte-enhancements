---
title: Link
component: link
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>


# {title}

A stylized anchor element for navigating to external or internal pages.

<br/>

<Link href={createGitHubLink(component)}>Component source</Link>

## Example

<CodePreview code={examples.link.code} class="">
<examples.link.component />
</CodePreview>


## Usage

<CodeBlock code={examples.linkUsage.code} lang='svelte' />