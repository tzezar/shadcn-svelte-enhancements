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

Welcome to the Tzezars Enhancements installation guide! This guide will help you install and configure the package to enhance your Svelte projects with additional components and utilities.


## Prerequisites

Before you begin, ensure you have the following installed:


1. [Shadcn-Svelte](https://next.shadcn-svelte.com/)

## Install with CLI

To quickly set up the package, use the following command:


<CodeSnippet content="npx shadcn-svelte-enhancements init" />


You will be asked few question:


<CodeBlock code={examples.promt.code} lang="bash" variant="" hideLineNumbers={true} hideCopyButton={true} />

### Usage Example

<CodeBlock code={examples.usage.code} lang="svelte" variant="" hideLineNumbers={true} hideCopyButton={true} />

## Troubleshooting

If you encounter issues during installation, check the following:
<br/>

1. Try clearing npm cache: `npm cache clean --force`
2. Check the <Link href="https://github.com/tzezar/shadcn-svelte-enhancements/issues">GitHub Issues</Link> for known bugs