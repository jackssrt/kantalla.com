<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, href }: { children: Snippet; href: string } = $props();
</script>

<a {href} rel="external" class="h-8 w-8 text-purple-300 *:h-full *:w-full">{@render children()}</a>
