<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		FileDropzone,
		MEGABYTE,
		type DropzoneProps
	} from '$lib/components/tzezars-enhancements/file-dropzone';
	import { Progress } from '$lib/components/ui/progress';
	import { X } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { onDestroy } from 'svelte';

	interface UploadedFile {
		name: string;
		type: string;
		size: number;
		progress: number;
		url: string | null;
	}

	let files = $state<UploadedFile[]>([]);

	onDestroy(() => {
		files.forEach(file => {
			if (file.url) {
				URL.revokeObjectURL(file.url);
			}
		});
	});

	function sleep(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function handleUpload(uploadedFiles: File[]) {
		for (const file of uploadedFiles) {
			// Create the Object URL immediately
			const objectUrl = URL.createObjectURL(file);
			
			const newFile: UploadedFile = {
				name: file.name,
				type: file.type,
				size: file.size,
				progress: 0,
				url: objectUrl
			};
			
			files = [...files, newFile];
			const index = files.length - 1;

			// Simulate upload progress
			for (let i = 0; i <= 100; i += 10) {
				await sleep(100);
				if (files[index]) { // Check if file still exists
					files[index].progress = i;
				}
			}
		}
	}

	function handleFileRejected({ reason, file }: { reason: string; file: File }) {
		toast.error(`${file.name} failed to upload!`, { description: reason });
	}

	function removeFile(index: number) {
		const file = files[index];
		if (file?.url) {
			URL.revokeObjectURL(file.url);
		}
		files = files.filter((_, i) => i !== index);
	}

	function formatFileSize(bytes: number): string {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	}
</script>

<div class="flex w-full flex-col gap-2 p-6">
	<FileDropzone
		onUpload={handleUpload}
		onFileRejected={handleFileRejected}
		maxFileSize={2 * MEGABYTE}
		accept="image/*"
		maxFiles={4}
		fileCount={files.length}
	/>

	<div class="flex flex-col gap-2">
		{#each files as file, i}
			<div class="flex items-center justify-between gap-2">
				<div class="flex items-center gap-2">
					{#if file.url !== null}
						<div class="relative h-9 w-9 overflow-hidden rounded bg-muted">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								src={file.url}
								alt={file.name}
								class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
							/>
						</div>
					{:else}
						<div class="h-9 w-9 rounded bg-muted" />
					{/if}

					<div class="flex flex-col">
						<span class="max-w-[200px] truncate">{file.name}</span>
						<span class="text-xs text-muted-foreground">
							{formatFileSize(file.size)}
						</span>
					</div>
				</div>

				{#if file.progress < 100}
					<Progress
						class="h-2 w-full max-w-[200px] flex-grow"
						value={file.progress}
						max={100}
					/>
				{:else}
					<Button 
						variant="outline" 
						size="icon" 
						onclick={() => removeFile(i)}
					>
						<X />
					</Button>
				{/if}
			</div>
		{/each}
	</div>
</div>