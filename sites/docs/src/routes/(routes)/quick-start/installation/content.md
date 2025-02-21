---
title: Installation guide
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import { CodeSnippet } from '$lib/components/tzezars-enhancements/code-snippet';
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>


# {title}

This guide will walk you through installing and setting up the Tzezars Enhancements package to enhance your Svelte projects with additional components and utilities.
<br/>

## Install with CLI

To quickly set up the package, use the following command:

<br/>

<CodeSnippet content="npx shadcn-svelte-enhancements init" />

<br/>

You will be asked few question:

<br/>

<CodeBlock code={examples.promt.code} lang="ts" variant="" />