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

During the setup process, you'll be prompted to choose which components you'd like to include in your project. You can select only the components you need, ensuring your project stays lightweight and free from unnecessary additions.



## Component Selection and Updates

1. After running the setup command, you can pick which components to copy to your project.
2. If you've previously installed components and need to update or override them, simply run the setup command again. The components you choose will be copied over, replacing the previous versions if necessary.
3. You can run the setup command multiple times to add more components to your project later on as needed.


<CodeBlock code={examples.promt.code} lang="bash" variant="" hideLineNumbers={true} hideCopyButton={true} />

## Installation Completed

Once the installation is complete, you'll see a success message in your terminal. The selected components will be installed and configured automatically, and you'll be ready to start using them in your project.

## Usage Example

<CodeBlock code={examples.usage.code} lang="svelte" variant="" hideLineNumbers={true} hideCopyButton={true} />

## Troubleshooting

If you encounter issues during installation, check the following:
<br/>

1. Try clearing npm cache: `npm cache clean --force`
2. Check the <Link href="https://github.com/tzezar/shadcn-svelte-enhancements/issues">GitHub Issues</Link> for known bugs
