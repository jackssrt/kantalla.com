<script lang="ts">
	import type { Snippet } from "svelte";

	const { children }: { children: Snippet } = $props();
</script>

<div class="group relative h-fit w-fit overflow-clip rounded">
	<div class="absolute inset-0 -z-10 animate-fade-in-backdrop"></div>
	<div
		class="absolute inset-0 bg-linear-to-b from-transparent to-purple-500/10 opacity-0 transition-all group-hover:opacity-100"
	></div>
	<div
		class="flex h-full w-full animate-fade-in flex-col items-center gap-2 overflow-clip rounded border border-purple-500 bg-purple-400/5 p-2 px-4 shadow transition-all"
	>
		{@render children()}
	</div>
</div>
