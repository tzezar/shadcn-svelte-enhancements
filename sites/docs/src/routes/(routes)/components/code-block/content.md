---
title: Code Snippet
component: code-snippet
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>

# {title}

Renders a formatted block of code with syntax highlighting for readability.

<br/>

<Link href={createGitHubLink(component)}>Component source</Link>


## Example

<CodePreview code={examples.example.code} class="">
<examples.example.component />
</CodePreview>


## Usage

<CodeBlock code={examples.usage.code} lang='svelte'/>