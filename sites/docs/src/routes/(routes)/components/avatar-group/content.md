---
title: Avatar Group
component: avatar-group
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>

# {title}

Displays a collection of user avatars, often used to show group members or participants.

<br/>

<Link href={createGitHubLink(component)}>Component source</Link>

## Horizontal

<CodePreview code={examples.horizontal.code} class="">
<examples.horizontal.component />
</CodePreview>

## Vertical

<CodePreview code={examples.vertical.code} class="">
<examples.vertical.component />
</CodePreview>

## Usage

<CodeBlock code={examples.codeExample.code} lang='svelte'/>
