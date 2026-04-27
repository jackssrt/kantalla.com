<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div
	class="flex h-fit w-fit flex-col items-center gap-2 rounded border border-purple-300 bg-purple-400/50 p-2 px-4 shadow backdrop-blur-2xl transition-all hover:bg-purple-400/55"
>
	{@render children()}
</div>
