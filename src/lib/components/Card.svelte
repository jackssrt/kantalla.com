<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="relative h-fit w-fit overflow-clip rounded">
	<div class="absolute inset-0 -z-10 animate-fade-in-backdrop"></div>
	<div
		class="flex h-full w-full animate-fade-in flex-col items-center gap-2 overflow-clip rounded border border-purple-300 bg-purple-400/50 p-2 px-4 shadow transition-all hover:bg-purple-400/55"
	>
		{@render children()}
	</div>
</div>
