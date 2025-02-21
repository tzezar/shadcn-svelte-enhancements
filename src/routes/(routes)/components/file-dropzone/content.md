---
title: File Dropzone
component: file-dropzone
---

<script lang='ts'>
    import {examples} from './examples.ts'
    import {CodePreview} from '$lib/components/tzezars-enhancements/code-preview'
    import {CodeBlock} from '$lib/components/tzezars-enhancements/code-block'
    import {Link} from '$lib/components/tzezars-enhancements/link'
    import {createGitHubLink} from '$lib/utils'
</script>

# {title}

Allows users to drag and drop files for upload, with optional previews and validations.

<br/>

<Link href={createGitHubLink(component)}>Component source</Link>

## Example

<CodePreview code={examples.example.code} class="">
<examples.example.component />
</CodePreview>
