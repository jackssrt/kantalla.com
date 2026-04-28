<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, href }: { children: Snippet; href: string } = $props();
</script>

<a
	{href}
	rel="external"
	class="h-8 w-8 text-purple-300 transition-all *:h-full *:w-full hover:brightness-110"
	>{@render children()}</a
>
